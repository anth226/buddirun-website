
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const formatNumber = (number, maxLength) => {
  maxLength = maxLength || 4;
  let string = `${number}`;
  while (string.length < maxLength) {
    string = `0${string}`;
  }
  return string;
}

module.exports = {
  randomIntFromInterval,
  formatNumber,
}
