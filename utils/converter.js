const axios = require('axios');

function toIdr(amount) {
    if (!amount) return 'Invalid Amount.';
    return `Rp ${amount.toLocaleString('id-ID')}`;
}

async function imageUrlToBase64(imageUrl) {
    if (!imageUrl) return 'Invalid Image URL.';
    const base64Image = await axios
        .get(imageUrl, { responseType: 'arraybuffer' })
        .then((response) => Buffer.from(response.data, 'binary').toString('base64'))
        .catch(() => {
            const emptyImage =
                'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAQSURBVHjaYvj//z8DQIABAAj8Av7bok0WAAAAAElFTkSuQmCC';
            return emptyImage;
        });
    return base64Image;
}

module.exports = { toIdr, imageUrlToBase64 };
