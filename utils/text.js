const capitalizeFirstLetter = (text) => text.replace(/\b\w/g, (match) => match.toUpperCase()).replace(/-/g, ' ');
const transformText = (text, condition = '-__-', replace = '-') => text.replace(condition, replace);

module.exports = [capitalizeFirstLetter, transformText];
