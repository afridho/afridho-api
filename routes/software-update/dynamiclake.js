const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const sendPushoverMessage = require('../../utils/pushover');
const ClientDB = require('../../utils/connectdb');
const { extractVersion } = require('../../utils/text');
const { imageUrlToBase64 } = require('../../utils/image');

const router = express.Router();
const db = new ClientDB('custom');
const title = ' Software Update';
const name = 'DynamicLake Pro';

const dataDefault = {
    id: 1,
    name,
    type: 'Mac Application',
    version: '1.0',
    url: 'https://www.dynamiclake.com/',
    url_image: 'https://framerusercontent.com/images/1X8My94OMIQSFOfUXsIOtcaAxIY.png',
    comment: 'Software Update',
};

const sendResponse = (res, message) => res.json(message);

router.get('/', async (req, res) => {
    try {
        const dataExist = (await db.read({ name })) || (await db.insert(dataDefault));

        if (!dataExist) {
            await sendPushoverMessage({ title, message: `${name} added successfully.` });
            return sendResponse(res, dataDefault);
        }

        const version = await crawl();
        if (version && version !== dataExist.version) {
            const attachment_base64 = await imageUrlToBase64(dataExist.url_image);
            const message = `${dataExist.name} ${version} has a new update.`;
            await db.update({ name }, { version });
            await sendPushoverMessage({ title, message, attachment_base64 });
            return sendResponse(res, { message });
        }

        return sendResponse(res, { message: 'No update available.' });
    } catch (error) {
        return sendResponse(res, { message: 'An error occurred while processing your request.' });
    }
});

async function crawl() {
    const endpoint = 'https://www.dynamiclake.com/changelog';

    try {
        const res = await axios.get(endpoint);
        const web_html = res.data;
        const $ = cheerio.load(web_html);
        const appText = $('h3:first').text();
        const appVersion = extractVersion(appText);
        return appVersion;
    } catch (error) {
        return null;
    }
}

module.exports = router;
