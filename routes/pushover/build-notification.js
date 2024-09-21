//NOTE: This function for Gitlab Action

const express = require('express');
const router = express.Router();
const sendPushoverMessage = require('../../utils/pushover');

router.post('/', async (req, res) => {
    // Param must be send to pushover
    const message = req?.body;
    const parse_message = await parse_status(message);
    const result = await sendPushoverMessage(parse_message);
    res.status(200).json(result);
});

async function parse_status(message) {
    if ('status' in message && 'message' in message) {
        // it must be contain message
        if (message['status'].toLowerCase() == 'success' || message['status'].toLowerCase() == 'ok') {
            message['message'] = message['message'] + ' ✅';
            delete message['status'];
        } else if (message['status'].toLowerCase() == 'failure' || message['status'].toLowerCase() == 'no') {
            message['message'] = message['message'] + ' ❌';
            delete message['status'];
        }
    } else {
        delete message['status'];
    }
    if (!('title' in message)) {
        message['title'] = 'afridho-api/api/pushover';
    }
    if (!('message' in message)) {
        message['message'] = 'Message empty';
    }
    return await message;
}

module.exports = router;
