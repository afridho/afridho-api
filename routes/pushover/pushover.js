const express = require('express');
const router = express.Router();
const axios = require('axios');
const FormData = require('form-data');
require('dotenv').config();
const TOKEN = process.env.PUSHOVER_TOKEN;
const USER_KEY = process.env.PUSHOVER_KEY;

router.post('/', async (req, res) => {
    if ('PUSHOVER_TOKEN' in process.env && 'PUSHOVER_KEY' in process.env) {
        const message = await pushover(req?.body);
        res.json(message);
        res.end();
    } else {
        result = { code: 401, error: 'Credential not found' };
        res.json(result);
        res.end();
    }
});

router.get('/', async (req, res) => {
    // be careful if using query param, it must be encoded before using it
    // Param must be send to pushover
    if ('PUSHOVER_TOKEN' in process.env && 'PUSHOVER_KEY' in process.env) {
        const message = await pushover(req?.query);
        res.json(message);
        res.end();
    } else {
        result = { code: 401, error: 'Credential not found' };
        res.json(result);
        res.end();
    }
});

async function pushover(message) {
    //NOTE - default data
    message.title = message.title ?? 'afridho-api/api/pushover';
    message.message = message.message ?? '‎'; //REVIEW - is empty character

    let bodyFormData = new FormData();
    bodyFormData.append('token', TOKEN);
    bodyFormData.append('user', USER_KEY);
    for (let key in message) {
        bodyFormData.append(key, message[key]);
    }
    const response_success = { message: 'Sent' };
    const response_error = { message: 'Error sending message.' };
    if (message.device) response_success['device'] = `${message.device}`;
    try {
        return await axios({
            method: 'POST',
            url: 'https://api.pushover.net/1/messages.json',
            data: bodyFormData,
            headers: { 'Content-Type': 'multipart/form-data' },
        }).then(() => response_success);
    } catch (error) {
        return response_error;
    }
}

module.exports = router;
