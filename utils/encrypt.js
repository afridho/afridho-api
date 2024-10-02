require('dotenv').config();
const CryptoJS = require('crypto-js');
const ENCRYPT_KEY = process.env.ENCRYPT_KEY;

/**
 * Encrypts a given text using AES encryption.
 *
 * @param {string} text - The plain text to encrypt.
 * @returns {string} - The encrypted text as a base64-encoded string.
 */
const encrypt = (text) => CryptoJS.AES.encrypt(text, ENCRYPT_KEY).toString();

/**
 * Decrypts a given AES-encrypted text back to its original plain text.
 *
 * @param {string} text - The encrypted text to decrypt.
 * @returns {string} - The decrypted plain text. If decryption fails, returns an empty string.
 */
const decrypt = (text) => {
    const bytes = CryptoJS.AES.decrypt(text, ENCRYPT_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};

module.exports = { encrypt, decrypt };
