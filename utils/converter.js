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
        .catch((error) => {
            return error;
        });
    return base64Image;
}

module.exports = [toIdr, imageUrlToBase64];
