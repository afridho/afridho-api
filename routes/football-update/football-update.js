const axios = require('axios');
const cheerio = require('cheerio');
const express = require("express");
const router = express.Router();

router.get("/:club_name", async (req, res) =>{  
    const param_club = req.params.club_name
    const alias = req.query.alias ? req.query.alias : null
    const p_o = await crawl(param_club, alias);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(p_o));
    res.end();    
})

router.get("/", async (req, res) =>{
    res.status(422)
    res.json({code : 422, error: 'Param not found', info: 'ex. ~/football-update/club_name'})
})

function crawl(club_name, alias){
    const url = `https://www.theguardian.com/football/${club_name}/results`
    const alias_team = alias == null ? club_name : alias.replace('-',' ')
    return axios(url).then(async (result) => {
            const html = result.data
            const $ = cheerio.load(html)
            data = []
            $(".football-matches__day", html).each(async function(){
                const home_team = $(this).find("span.team-name__long:eq(0)").text()
                const home_score = $(this).find(".football-team__score:eq(0)").text()
                const away_team = $(this).find("span.team-name__long:eq(1)").text()
                const away_score = $(this).find(".football-team__score:eq(1)").text()
                const match_status = _getstatus(alias_team, home_team.toLowerCase(), home_score.toLowerCase(), away_score)
                const match_url = $(this).find("a.football-teams").attr('href')
                const match_time = $(this).find(".date-divider").text()
                const match_time_short = $(this).find("span.football-matches__date").text()
                const competition = $(this).find("a.football-matches__heading").text()
                const competition_url = 'https://www.theguardian.com'+$(this).find("a.football-matches__heading").attr('href')
            data.push({home_team, home_score, away_team, away_score, match_status, match_url, match_time, match_time_short, competition, competition_url})
            })
            return await data
            }).catch((err) => {
            return err
            });
}


function _getstatus(home, home_team, home_score, away_score){
    if (home_score == away_score){
        return 'Draw'
    }else if (home_score > away_score){
        return home_team == home ? 'Win' : 'Lose'
        
    }else if (home_score < away_score){
        return home_team != home ? 'Win' : 'Lose'

    }
    
}

module.exports = router;

