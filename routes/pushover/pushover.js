const express = require('express');
const router = express.Router();
const sendPushoverMessage = require('../../utils/pushover');

//NOTE - POST METHOD
router.post('/', async (req, res) => {
    const message = await sendPushoverMessage(req?.body);
    res.json(message);
    res.end();
});

//NOTE - GET METHOD
router.get('/', async (req, res) => {
    // be careful if using query param, it must be encoded before using it
    // Param must be send to pushover
    const message = await sendPushoverMessage(req?.query);
    res.json(message);
    res.end();
});
module.exports = router;
