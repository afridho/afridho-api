const axios = require('axios');
const FormData = require('form-data');
require('dotenv').config();
const USER_KEY = process.env.PUSHOVER_KEY;
const DEFAULT_TOKEN = process.env.PUSHOVER_TOKEN;
const isAuthenticated = 'PUSHOVER_TOKEN' in process.env && 'PUSHOVER_KEY' in process.env;

const sendPushoverMessage = async (message, token = DEFAULT_TOKEN) => {
    if (isAuthenticated) {
        message.title = message.title ?? 'afridho-api/api/pushover';
        message.message = message.message ?? '‎'; // REVIEW - is empty character

        let fd = new FormData();
        fd.append('token', token);
        fd.append('user', USER_KEY);
        for (let key in message) {
            fd.append(key, message[key]);
        }

        const response_success = { message: 'Sent' };
        const response_error = { message: 'Error sending message.' };

        if (message.device) response_success['device'] = `${message.device}`;

        try {
            return await axios({
                method: 'POST',
                url: 'https://api.pushover.net/1/messages.json',
                data: fd,
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then(() => response_success);
        } catch (error) {
            return response_error;
        }
    } else {
        return { code: 401, error: 'Credential not found' };
    }
};

module.exports = sendPushoverMessage;
