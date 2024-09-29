const capitalizeFirstLetter = (text) => text.replace(/\b\w/g, (match) => match.toUpperCase()).replace(/-/g, ' ');
const transformText = (text, condition = '-__-', replace = '-') => text.replace(condition, replace);
const removeFirstWord = (text) => (text ? text.split(' ').slice(1).join(' ') : 'Invalid!');

module.exports = { capitalizeFirstLetter, transformText, removeFirstWord };
