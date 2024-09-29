const sharp = require('sharp');

async function compressImageBase64(inputBase64, resizePercentage = 60, format = 'webp') {
    // Decode the base64 image
    const inputBuffer = Buffer.from(inputBase64, 'base64');

    // Compress and resize the image by the specified percentage
    return await sharp(inputBuffer)
        .metadata()
        .then((metadata) => {
            const newWidth = Math.round((metadata.width * resizePercentage) / 100);
            const newHeight = Math.round((metadata.height * resizePercentage) / 100);
            return sharp(inputBuffer).toFormat(format).resize(newWidth, newHeight).toBuffer();
        })
        .then((resizedImageBuffer) => resizedImageBuffer.toString('base64'))
        .catch((error) => {
            console.error(error);
        });
}

module.exports = { compressImageBase64 };
