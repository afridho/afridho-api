const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const router = express.Router();
require('dotenv').config();
const sendPushoverMessage = require('../../utils/pushover');
const generateImage = require('../football-update/generate-image');
const ClientDB = require('../../utils/connectdb');
const db = new ClientDB('football_update_cron');
const TOKEN = process.env.PUSHOVER_TOKEN_FOOTBALL_UPDATE;

router.get('/', async (req, res) => {
    res.status(422);
    res.json({ code: 422, error: 'Club not found', info: 'ex. ~/fav-football-cron/club_name' });
    res.end();
});

router.get('/:club_name', async (req, res) => {
    const club_name = req.params.club_name;
    const data = await crawl(club_name);
    const code = 200; //NOTE : successfull response code

    if (!data) return res.status(200).json({ code: 200, error: 'Invalid Club Name' });

    const mongo_data = await db.read({ club_name });
    if (mongo_data && mongo_data.club_name == club_name) {
        if (data?.match_id != mongo_data.match_id) {
            const _data = { match_id: data.match_id };
            await db.update({ club_name }, _data);
            const coverImage = await generateImage(data);
            await send_pushover(data, coverImage);
            response(res, { code, status: 'Pushover sent.' });
        } else {
            response(res, { code, status: 'no update data.' });
        }
    } else {
        // NOTE: 'New Club in database'
        const _data = { club_name, match_id: data.match_id };
        await db.insert(_data);
        res.status(code).json({ code: 200, status: `New Club Added ${club_name}` });
    }
});

function response(res, data) {
    res.status(data.code).json(data);
}

async function send_pushover(crawl_data, image) {
    const match_result = await crawl_data;
    const match_status = await match_result.match_status;
    const match_competition = await match_result.competition;
    const title = `${match_result.team_short_home}  ${match_result.score_home} - ${match_result.score_away}  ${match_result.team_short_away}`;
    const attachment_base64 = image;
    const message = `<b>Result:</b> ${match_status}${match_status.toLowerCase() == 'win' ? '✅' : '😩'}
<i>#${match_competition}</i>`;
    const url = `https://www.youtube.com/results?search_query=${match_result.team_home
        .replace(' ', '+')
        .toLowerCase()}+${match_result.team_away.replace(' ', '+').toLowerCase()}`;
    const url_title = 'View Match on Youtube';

    const dataMessage = {
        title,
        message,
        attachment_base64,
        url,
        url_title,
        html: 1,
    };

    await sendPushoverMessage(dataMessage, TOKEN);
}

async function get_redirect_url(originalUrl) {
    try {
        const response = await axios.head(originalUrl);
        return response.request.res.responseUrl;
    } catch (error) {
        console.error(error);
        return null;
    }
}

function parse_club_name(name) {
    // NOTE: for handle theguardian.com url
    const listName = ['manchester-united'];

    return listName.includes(name) ? name : name.split('-').join('');
}

async function get_endpoint(name) {
    const listCountry = ['france'];
    const defaultEndpoint = `https://www.skysports.com/${name}-results`;
    const countryEndpoint = `https://www.skysports.com/football/teams/${name}/results`;

    if (listCountry.includes(name)) return countryEndpoint;
    return defaultEndpoint;
}

async function crawl(club_name) {
    const endpoint = await get_endpoint(club_name);
    const endpoint_alt = `https://www.theguardian.com/football/${parse_club_name(club_name)}/results`;
    try {
        const [res_alt, res] = await Promise.all([axios.get(endpoint_alt), axios.get(endpoint)]);
        const [web_html_alt, web_html] = await Promise.all([res_alt.data, res.data]);

        const $web_alt = cheerio.load(web_html_alt);
        const web_alt_href = $web_alt('td.football-match__teams a').first().attr('href');
        const web_alt_href_url = await get_redirect_url(web_alt_href);
        const res_alt_web = await axios.get(`${web_alt_href_url}#img-1`);
        const res_alt_web_html = res_alt_web.data;
        const $web_image = cheerio.load(res_alt_web_html);
        const image_cover = $web_image('figure source').attr('srcset');

        const $web = cheerio.load(web_html);
        const match_url = $web('.fixres__item').children('a').attr('href');
        const match_id = $web('.fixres__item > a').attr('data-item-id');
        const competition = $web('h5.fixres__header3').first().text();

        const response = await axios.get(match_url);
        const html = response.data;
        const $ = cheerio.load(html);

        const data = {
            cover: image_cover || $('.sdc-article-image__item').attr('src'),
            team_home: $(
                '.sdc-site-match-header__team-name--home .sdc-site-match-header__team-name-block-target'
            ).text(),
            team_short_home:
                $('.sdc-site-match-header__team-name--home a').attr('data-short-name') ||
                $('.sdc-site-match-header__team-name--home .sdc-site-match-header__team-name-block-target').text(),
            team_away: $(
                '.sdc-site-match-header__team-name--away .sdc-site-match-header__team-name-block-target'
            ).text(),
            team_short_away:
                $('.sdc-site-match-header__team-name--away a').attr('data-short-name') ||
                $('.sdc-site-match-header__team-name--away .sdc-site-match-header__team-name-block-target').text(),
            score_home: $('.sdc-site-match-header__team-score-block[data-update="score-home"]').text(),
            score_away: $('.sdc-site-match-header__team-score-block[data-update="score-away"]').text(),
            match_id,
            match_url,
            match_status: _getstatus(
                club_name.toLowerCase(),
                $('.sdc-site-match-header__team-name--home .sdc-site-match-header__team-name-block-target').text(),
                $('.sdc-site-match-header__team-score-block[data-update="score-home"]').text(),
                $('.sdc-site-match-header__team-score-block[data-update="score-away"]').text()
            ),
            logo_home: $('.sdc-site-match-header__team-badge--home .sdc-site-match-header__team-badge-image').attr(
                'src'
            ),
            logo_away: $('.sdc-site-match-header__team-badge--away .sdc-site-match-header__team-badge-image').attr(
                'src'
            ),
            competition,
        };

        return data;
    } catch (error) {
        return null;
    }
}

function _getstatus(home, home_team, home_score, away_score) {
    const convert = (text) => text.toLowerCase().replace(/\s+/g, '-');
    if (home_score == away_score) {
        return 'Draw';
    } else if (home_score > away_score) {
        return convert(home_team) == home ? 'Win' : 'Lose';
    } else if (home_score < away_score) {
        return convert(home_team) != home ? 'Win' : 'Lose';
    }
}

module.exports = router;
