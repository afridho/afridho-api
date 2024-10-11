const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const sendPushoverMessage = require('../../utils/pushover');
const ClientDB = require('../../utils/connectdb');
const { extractVersion } = require('../../utils/text');
const { imageUrlToBase64 } = require('../../utils/image');

const router = express.Router();
const db = new ClientDB('custom');
const title = ' Software Update';
const name = 'DynamicLake Pro';

const dataDefault = {
    id: 1,
    name,
    type: 'Mac Application',
    version: '1.0',
    url: 'https://www.dynamiclake.com/changelog',
    url_image: 'https://framerusercontent.com/images/1X8My94OMIQSFOfUXsIOtcaAxIY.png',
    comment: 'Software Update',
};

const sendResponse = (res, message) => res.json(message);

router.get('/', async (req, res) => {
    try {
        const dataExist = await db.read({ name });

        if (!dataExist) {
            await db.insert(dataDefault);
            await sendPushoverMessage({ title, message: `${name} added successfully.` });
            return sendResponse(res, dataDefault);
        }

        const { version, list_update } = await crawl();
        if (version && version !== dataExist.version) {
            const attachment_base64 = await imageUrlToBase64(dataExist.url_image);
            const message = `${dataExist.name} has a new version.\n\n${list_update}`;
            await db.update({ name }, { version });
            await sendPushoverMessage({
                title,
                message,
                attachment_base64,
                html: 1,
                url: dataExist.url,
                url_title: 'Full Changelog',
            });
            return sendResponse(res, { message });
        }

        return sendResponse(res, { message: 'No update available.' });
    } catch (error) {
        return sendResponse(res, { message: 'An error occurred while processing your request.' });
    }
});

async function crawl() {
    const endpoint = 'https://www.dynamiclake.com/changelog';

    try {
        const res = await axios.get(endpoint);
        const web_html = res.data;
        const $ = cheerio.load(web_html);
        const appText = $('h3:first').text();
        const list = $('ul.framer-text:first h3')
            .map((i, el) => $(el).text())
            .get();

        let str = '';
        list.map((val) => {
            str = str.concat(`- ${val}\n`);
        });
        const version = extractVersion(appText) || '';
        const list_update = `<b>${version}</b>\n${str}\- <b><a href=${endpoint} style='text-decoration: none !important'>Read More...</a></b>`;
        return { version, list_update };
    } catch (error) {
        return {};
    }
}

module.exports = router;
