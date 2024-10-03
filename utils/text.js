/**
 * Capitalizes the first letter of each word in a given string.
 *
 * @param {string} text - The input string to transform.
 * @returns {string} The transformed string with the first letter of each word capitalized.
 *
 * @example
 * // returns "Hello World"
 * capitalizeFirstLetter("hello world");
 */
const capitalizeFirstLetter = (text) => text.replace(/\b\w/g, (match) => match.toUpperCase()).replace(/-/g, ' ');

/**
 * Transforms the input text by replacing a specified condition with a replacement string.
 *
 * @param {string} text - The input string to transform.
 * @param {string} [condition='-__-'] - The condition to search for in the input string.
 * @param {string} [replace='-'] - The string to replace the condition with.
 * @returns {string} The transformed string after the replacement.
 *
 * @example
 * // returns "Hello-World"
 * transformText("Hello-__-World", "-__-", "-");
 */
const transformText = (text, condition = '-__-', replace = '-') => text.replace(condition, replace);

/**
 * Removes the first word from a given string.
 *
 * @param {string} text - The input string from which to remove the first word.
 * @returns {string} The string after removing the first word, or 'Invalid!' if the input is empty.
 *
 * @example
 * // returns "World"
 * removeFirstWord("Hello World");
 *
 * // returns "Invalid!"
 * removeFirstWord("");
 */
const removeFirstWord = (text) => (text ? text.split(' ').slice(1).join(' ') : 'Invalid!');

module.exports = { capitalizeFirstLetter, transformText, removeFirstWord };
