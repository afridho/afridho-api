const axios = require('axios');
const cheerio = require('cheerio');
const express = require("express");
const router = express.Router();
const FormData = require('form-data');
require('dotenv').config()
const MONGODB_USER = process.env.MONGODB_PASS
const MONGODB_PASS = process.env.MONGODB_PASS
const USER_KEY = process.env.PUSHOVER_KEY
const TOKEN = process.env.PUSHOVER_TOKEN_FOOTBALL_UPDATE
const { MongoClient, ServerApiVersion } = require('mongodb');

// Connect to MongoDB
const uri = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@ac-eymobfz-shard-00-00.dpxrwue.mongodb.net:27017,ac-eymobfz-shard-00-01.dpxrwue.mongodb.net:27017,ac-eymobfz-shard-00-02.dpxrwue.mongodb.net:27017/?ssl=true`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const database = client.db('afridho-api');
const collection = database.collection('football_update_cron');

router.get("/:club_name", async (req, res) =>{  
    const param_club = req.params.club_name
    const alias = req.query.alias ? req.query.alias : null

    if ('debug' in req.query && req.query.debug == 'true') {
        const p_o = await cek_debug(param_club, alias);
        p_o.code = 200
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(p_o));
        res.end(); 
    }else{
        const p_o = await cek(param_club, alias);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({"code": 200, "status": (p_o ? p_o.status : 'no info')}));
        res.end(); 
    }
})

router.get("/", async (req, res) =>{
    res.status(422)
    res.json({code : 422, error: 'Param not found', info: 'ex. ~/fav-football-cron/club_name'})
    res.end()
})

async function mongo_read(query_alias){
    const alias = { club_name: query_alias };
    return await collection.findOne(alias);
    }
async function mongo_insert(data){
    return await collection.insertOne(data);
    }
async function mongo_update(data, query_alias){
    const alias = { club_name: query_alias };
    const updateDoc = {$set: data}; 
    return await collection.updateOne(alias, updateDoc, {});
    }

async function cek(club_name, _alias){
    const alias = _alias == null ? club_name : _alias.replace('-',' ')
    
    var now = new Date()
    const data = await(crawl(club_name, alias))
    const match_time = new Date(data.match_time);
    var Difference_In_Time = now.getTime() - match_time.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    
    const mongo_data = await mongo_read(alias)
    const mongo_name = mongo_data ? mongo_data.club_name : null
    const mongo_status = mongo_data ? mongo_data.status : null
    const mongo_date = mongo_data ? new Date(mongo_data.date) : null
    
    if(mongo_data && mongo_name == alias){
        if (parseInt(Difference_In_Days) < 3){ // max 2 days
            if (mongo_date.toDateString() == match_time.toDateString()){
                if(mongo_status == 'sent') {
                    // await send_pushover(data)  // very crucial, don't send pushover // debug only
                    return ({ status : 'no update data.'})
                }else{
                    //Send Pushover
                    await send_pushover(data)
                    return ({ status : 'Pushover sent.'})
                }
            }else{
                _data = {status : "sent", date : match_time.toDateString()}
                await mongo_update(_data, alias)
                // Send Pushover
                await send_pushover(data)
                return ({ status : 'Pushover sent.'})
            }
        }else{
            // await send_pushover(data) // debug only
            return ({ status : 'no update data.'})
        }
    }else{
        // console.log('New Club in database')
        _data = {club_name : alias, status : "sent", date : match_time.toDateString()}
        await mongo_insert(_data)
        // Send Pushover
        await send_pushover(data)
        return ({ status : 'Pushover sent.'})
    }
}

async function cek_debug(club_name, _alias){
    const alias = _alias == null ? club_name : _alias.replace('-',' ')
    const data = await(crawl(club_name, alias))
    await send_pushover(data)
    return ({ debug : true, status : 'Pushover sent.'})
}

async function send_pushover(crawl_data){
    const match_result = await crawl_data
    const match_status = await match_result.match_status
    const match_competition = await match_result.competition
    const title = `${match_result.home_team}  ${match_result.home_score} - ${match_result.away_score}  ${match_result.away_team}`
    const message = `
Result: ${match_status}${match_status.toLowerCase() == 'win' ? '✅' : '😩'}
Competition: ${match_competition}`
    const url = `https://www.youtube.com/results?search_query=${match_result.home_team.replace(' ', '+').toLowerCase()}+${match_result.away_team.replace(' ', '+').toLowerCase()}`
    const url_title = "View Match on Youtube"
    let fd = new FormData();
    fd.append("token", TOKEN);
    fd.append("user", USER_KEY);
    fd.append("title", title)
    fd.append("message", message)
    fd.append("url", url)
    fd.append("url_title", url_title)
    // fd.append("device", "iphone6s")

    try{
        return await axios({
            method: "POST",
            url: "https://api.pushover.net/1/messages.json",
            data: fd,
            headers: { "Content-Type": "multipart/form-data" },
        }).then(content => {});
    }catch (error) {
        return ({request: null, status: 0})
    }
}

async function crawl(club_name, alias){
    const url = `https://www.theguardian.com/football/${club_name}/results`
    return axios(url).then(async (result) => {
            const html = result.data
            const $ = cheerio.load(html)
            $(".football-matches__day").first().each(async function(){
                data = {
                home_team : $(this).find("span.team-name__long:eq(0)").text(),
                home_score : $(this).find(".football-team__score:eq(0)").text(),
                away_team : $(this).find("span.team-name__long:eq(1)").text(),
                away_score : $(this).find(".football-team__score:eq(1)").text(),
                match_status : _getstatus(alias.toLowerCase(), $(this).find("span.team-name__long:eq(0)").text().toLowerCase(), $(this).find(".football-team__score:eq(0)").text(), $(this).find(".football-team__score:eq(1)").text()),
                match_url : $(this).find("a.football-teams").attr('href'),
                match_time : $(this).find(".date-divider").text(),
                match_time_short : $(this).find("span.football-matches__date").text(),
                competition : $(this).find("a.football-matches__heading").text(),
                // competition_url : 'https://www.theguardian.com'+$(this).find("a.football-matches__heading").attr('href'),
                }
            })
            return await data
            }).catch((err) => {
            return err
            });
}

async function _getstatus(home, home_team, home_score, away_score){
    if (home_score == away_score){
        return 'Draw'
    }else if (home_score > away_score){
        return home_team == home ? 'Win' : 'Lose'
    }else if (home_score < away_score){
        return home_team != home ? 'Win' : 'Lose'
    }
}

module.exports = router;