const express = require('express');
const router = express.Router();
const ClientDB = require('../../utils/connectdb');
const db = new ClientDB('test');

const sendResponse = (res, message) => res.json(message);

router.get('/', async (req, res) => {
    await db.insert({ name: 'good' });
    sendResponse(res, { message: 'Data added successfully' });
});

module.exports = router;
