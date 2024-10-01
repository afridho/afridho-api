const express = require('express');
const router = express.Router();
const sendPushoverMessage = require('../../utils/pushover');
const axios = require('axios');
const { imageUrlToBase64 } = require('../../utils/converter');
const { transformText, capitalizeFirstLetter } = require('../../utils/text');
const ClientDB = require('../../utils/connectdb');
const db = new ClientDB('software_update');
const title = ' Software Update';

// Helper function to send response
const sendResponse = (res, message) => res.json(message);

// NOTE - GET METHOD
router.get('/', async (req, res) => {
    const app_name = req.query.name;

    if (!app_name) {
        return sendResponse(res, { message: 'App name is required' });
    }

    const dataExist = await db.read({ app_name });

    if (!dataExist) {
        const post_update_date = '2024-01-01'; // default timestamp
        await db.insert({ app_name, post_update_date });
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

    await db.update({ app_name }, document);
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

module.exports = router;
