const express = require("express");
const router = express.Router();
const axios = require('axios');
const FormData = require('form-data');
require('dotenv').config()
const TOKEN = process.env.PUSHOVER_TOKEN
const USER_KEY = process.env.PUSHOVER_KEY

router.get("/", async (req, res) =>{
    // be careful if using query param, it must be encoded before using it
    // Param must be send to pushover
    if ('PUSHOVER_TOKEN' in process.env && 'PUSHOVER_KEY' in process.env){
        const message = req.query
        const message_default = message.message
        const parse_message = await parse_status(message)
        const p_o =  await pushover(parse_message);
        const result = {}
        result['code'] = 200
        p_o['status'] == 1 ? result['status'] = 'Message sent.' : result['status'] = 'Message failed to send.';
        p_o['status'] == 1 ? result['message'] = message_default : ''
        'device' in parse_message ? result['device'] = parse_message['device'] : ''
        p_o['status'] == 1 ? result['request'] = p_o['request'] : ''
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(result))
        res.end()
    }else{
        result = {code : 401, error: 'env not found'}
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(result))
        res.end()
    }
    
}
);

async function parse_status(message){
    if('status' in message && 'message' in message){ // it must be contain message
            if (message['status'].toLowerCase() == 'success' || message['status'].toLowerCase() == 'ok'){
                message['message'] = message['message'] + ' ✅'
                delete message['status']
            }else if (message['status'].toLowerCase() == 'failure' || message['status'].toLowerCase() == 'no'){
                message['message'] = message['message'] + ' ❌'
                delete message['status']
            }
        }else{
            delete message['status']
        }
    if(!('title' in message)){
            message['title'] = 'afridho-api/api/pushover'
        }
    if(!('message' in message)){
            message["message"] = "Message empty";
    }
    return await message
}

async function pushover(message) {
    let bodyFormData = new FormData();
    bodyFormData.append("token", TOKEN);
    bodyFormData.append("user", USER_KEY);
    for (let key in message) {
        bodyFormData.append(key, message[key]);
    }
    try{
        return await axios({
            method: "POST",
            url: "https://api.pushover.net/1/messages.json",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        }).then(content => {return content.data});
    }catch (error) {
        return ({request: null, status: 0})
    }
}

module.exports = router;