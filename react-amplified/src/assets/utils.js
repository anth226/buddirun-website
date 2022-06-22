const {isNaN} = require("formik");

const formatNumber = (number, maxLength) => {
  maxLength = maxLength || 4;
  let string = `${number}`;
  while (string.length < maxLength) {
    string = `0${string}`;
  }
  return string;
}

const formatPlayerPosition = (playerPos) => {
  const numPlayerPos = parseInt(playerPos);
  if (!numPlayerPos || isNaN(numPlayerPos)) {
    return '';
  }
  let suffix;
  switch (numPlayerPos) {
    case 1:
      suffix = 'st';
      break;
    case 2:
      suffix = 'nd';
      break;
    case 3:
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
  }
  return numPlayerPos + suffix;
}

const formatPlural = (text, value) => {
  const numVal = parseInt(value);
  if (isNaN(numVal)) {
    console.warn('Plural value is not a number');
    return text;
  }
  if (numVal === 0 || numVal > 1) {
    return `${text}s`;
  }
  return text;
}

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = {
  formatNumber,
  formatPlayerPosition,
  formatPlural,
  randomIntFromInterval,
}
