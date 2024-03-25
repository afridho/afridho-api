const capitalizeFirstLetter = (text) => text.replace(/\b\w/g, (match) => match.toUpperCase()).replace(/-/g, ' ');

module.exports = capitalizeFirstLetter;
