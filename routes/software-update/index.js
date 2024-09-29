const express = require('express');
const router = express.Router();
const sendPushoverMessage = require('../../utils/pushover');
const getClientDB = require('../../utils/connectdb');
const database = getClientDB();
const db = database.collection('software_update');
const axios = require('axios');
const { imageUrlToBase64 } = require('../../utils/converter');
const { transformText, capitalizeFirstLetter } = require('../../utils/text');
const title = ' Software Update';

// Helper function to send response
const sendResponse = (res, message) => res.json(message);

// NOTE - GET METHOD
router.get('/', async (req, res) => {
    const app_name = req.query.name;

    if (!app_name) {
        return sendResponse(res, { message: 'App name is required' });
    }

    const dataExist = await mongo_read(app_name);

    if (!dataExist) {
        const post_update_date = '2024-01-01'; // default timestamp
        await mongo_insert({ app_name, post_update_date });
        const appNameNew = capitalizeFirstLetter(app_name);
        const message = {
            title,
            message: `New app ${appNameNew} is added 👨🏻‍💻`,
        };
        await sendPushoverMessage(message);
        return sendResponse(res, message);
    }

    const endpoint = `https://www.minorpatch.com/api/search?post_title=${app_name}`;
    const { data } = await axios.get(endpoint);

    if (data.length === 0) {
        return sendResponse(res, { message: 'No App available.' });
    }

    const document = data[0];
    const isUpdate = dataExist.post_update_date !== document.post_update_date;

    if (!isUpdate) {
        return sendResponse(res, { message: 'No update available.' });
    }

    await mongo_update(document, app_name);
    const imageUrl = document?.post_featuredimage;
    const appNameNew = transformText(document?.post_title, ' Crack', '');
    const url = `https://www.minorpatch.com/${document.post_type}/${document.post_url}.html`;
    const url_title = 'Open Link';
    const attachment_base64 = await imageUrlToBase64(imageUrl);
    const message = {
        title,
        message: `${appNameNew} has new update.`,
        url,
        url_title,
        attachment_base64,
    };
    await sendPushoverMessage(message);
    sendResponse(res, message);
});

async function mongo_read(app_name) {
    return await db.findOne({ app_name });
}

async function mongo_insert(data) {
    return await db.insertOne(data);
}

async function mongo_update(data, app_name) {
    return await db.updateOne({ app_name }, { $set: data });
}

module.exports = router;
