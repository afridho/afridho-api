const express = require('express');
const router = express.Router();
const ClientDB = require('../../utils/connectdb');
const db = new ClientDB('test');

const sendResponse = (res, message) => res.json(message);

router.get('/', async (req, res) => {
    await db.insert({ name: 'good' });
    sendResponse(res, { message: 'Data added successfully' });
});

router.post('/', async (req, res) => {
    const data = req?.body;
    if (Object.keys(data).length) {
        await db.insert(data);
        sendResponse(res, { message: 'Data added successfully' });
    }
    sendResponse(res, { message: 'No body inserted' });
});

module.exports = router;
