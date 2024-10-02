const axios = require('axios');
const FormData = require('form-data');
require('dotenv').config();

const USER_KEY = process.env.PUSHOVER_KEY;
const DEFAULT_TOKEN = process.env.PUSHOVER_TOKEN;
const isAuthenticated = 'PUSHOVER_TOKEN' in process.env && 'PUSHOVER_KEY' in process.env;

/**
 * Sends a message to the Pushover API.
 *
 * @async
 * @function sendPushoverMessage
 * @param {Object} message - The message object to be sent.
 * @param {string} [message.title] - The title of the message (optional).
 * @param {string} [message.message] - The content of the message (optional).
 * @param {string} [message.device] - The name of the device to send the message to (optional).
 * @param {string} [message.priority] - The priority of the message (optional). Can be '0' (normal), '1' (high), or '-1' (low).
 * @param {string} [message.sound] - The name of the sound to be played (optional). See the Pushover API for available sounds.
 * @param {string} [message.url] - A URL to be included in the message (optional).
 * @param {string} [message.url_title] - The title of the URL (optional).
 * @param {string} [token=DEFAULT_TOKEN] - The Pushover application token (optional, defaults to the environment variable).
 * @returns {Promise<Object>} A promise that resolves to an object indicating the result of the operation.
 * @returns {Object} return.value - The response object.
 * @returns {string} return.value.message - A message indicating the result ('Sent' or 'Error sending message.').
 * @returns {number} [return.value.code] - HTTP status code (only present if there was an error due to missing credentials).
 * @returns {string} [return.value.error] - Error message if credentials are not found.
 *
 * @throws {Error} Throws an error if the request to the Pushover API fails.
 *
 * @example
 * const message = {
 *     title: 'Test Notification',
 *     message: 'This is a test message.',
 *     device: 'my_device',
 *     priority: '1',
 *     sound: 'magic',
 *     url: 'https://example.com',
 *     url_title: 'Example Website'
 * };
 *
 * sendPushoverMessage(message)
 *     .then(response => console.log(response))
 *     .catch(error => console.error(error));
 */
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
            const response = await axios({
                method: 'POST',
                url: 'https://api.pushover.net/1/messages.json',
                data: fd,
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            // Check if the response indicates success
            if (response.data && response.data.status === 1) {
                return response_success;
            } else {
                return response_error;
            }
        } catch (error) {
            return response_error;
        }
    } else {
        return { code: 401, error: 'Credential not found' };
    }
};

module.exports = sendPushoverMessage;
