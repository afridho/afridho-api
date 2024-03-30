require('dotenv').config();
const CryptoJS = require('crypto-js');
const ENCRYPT_KEY = process.env.ENCRYPT_KEY;

const encrypt = (text) => CryptoJS.AES.encrypt(text, ENCRYPT_KEY).toString();

const decrypt = (text) => {
    const bytes = CryptoJS.AES.decrypt(text, ENCRYPT_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};

module.exports = [encrypt, decrypt];
