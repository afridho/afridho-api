const sharp = require('sharp');
const axios = require('axios');

/**
 * Converts an image URL to a base64 encoded string, with options for resizing and format.
 *
 * @param {string} imageUrl - The URL of the image to convert.
 * @param {Object} [options={}] - Options for resizing and format.
 * @param {number} [options.resize=60] - The percentage to resize the image (default is 60%).
 * @param {string} [options.format='webp'] - The format to convert the image to (default is 'webp').
 * @returns {Promise<string>} - A promise that resolves to the base64 encoded image string.
 */
async function imageUrlToBase64(imageUrl, options = {}) {
    const { resize = 60, format = 'webp' } = options; // Destructure options with defaults

    if (!imageUrl) return 'Invalid Image URL.';

    const base64Image = await axios
        .get(imageUrl, { responseType: 'arraybuffer' })
        .then((response) => Buffer.from(response.data, 'binary').toString('base64'))
        .catch(() => {
            const emptyImage =
                'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAQSURBVHjaYvj//z8DQIABAAj8Av7bok0WAAAAAElFTkSuQmCC';
            return emptyImage;
        });

    const inputBuffer = Buffer.from(base64Image, 'base64');

    // Resize the image by the specified percentage
    const resultResizeImage = await sharp(inputBuffer)
        .metadata()
        .then((metadata) => {
            const newWidth = Math.round((metadata.width * resize) / 100);
            const newHeight = Math.round((metadata.height * resize) / 100);
            return sharp(inputBuffer).toFormat(format).resize(newWidth, newHeight).toBuffer();
        })
        .then((resizedImageBuffer) => resizedImageBuffer.toString('base64'))
        .catch((error) => {
            console.error(error);
        });

    return resultResizeImage;
}

module.exports = { imageUrlToBase64 };
