//MARK: /api/software-update/app-store?name=software_name

const axios = require('axios');
const express = require('express');
const sendPushoverMessage = require('../../utils/pushover');
const ClientDB = require('../../utils/connectdb');
const { imageUrlToBase64 } = require('../../utils/image');

const router = express.Router();
const db = new ClientDB('custom');
const title = ' Software Update';

const sendResponse = (res, message) => res.json(message);

router.get('/', async (req, res) => {
    const name = req.query.name;
    try {
        const dataExist = await db.read({ name });
        if (!dataExist) {
            const dataDefault = {
                id: 1,
                name: name,
                type: 'Mac Application',
                version: '1.0',
                url: 'https://apps.apple.com',
                url_image: 'https://framerusercontent.com/images/1X8My94OMIQSFOfUXsIOtcaAxIY.png',
                comment: 'Software Update',
            };
            await db.insert(dataDefault);
            await sendPushoverMessage({ title, message: `${name} added successfully.` });
            return sendResponse(res, dataDefault);
        }

        const endpoint = `https://itunes.apple.com/search?entity=macSoftware&country=us&limit=1&term=${name}`;
        const { data: response } = await axios.get(endpoint);
        if (response?.resultCount > 0) {
            const data = response?.results[0];
            const { trackName, version, artworkUrl512: url_image, releaseNotes, trackViewUrl: url } = data;
            if (version !== dataExist.version) {
                await db.update({ name }, { version, url_image, url });
                const attachment_base64 = await imageUrlToBase64(url_image);
                const message = `${trackName} has a new version.\n\n<b>${version}</b>\n${releaseNotes}`;
                await sendPushoverMessage({
                    title,
                    message,
                    attachment_base64,
                    html: 1,
                    url,
                    url_title: 'Full Changelog',
                });
                return sendResponse(res, { message: `${trackName} has a new version ${version}` });
            }
        }

        return sendResponse(res, { message: 'No update available.' });
    } catch (error) {
        return sendResponse(res, { message: 'An error occurred while processing your request.' });
    }
});

module.exports = router;
