const { getInput } = require('./input');

function getBitAt(value, position) {
  return (value >> position) & 1;
}

function getMostCommonBitAt(values, position) {
  let numberOf1 = 0;
  values.forEach((value) => {
    const bit = getBitAt(value, position);
    if (bit === 0b1) {
      numberOf1++;
    }
  });
  return numberOf1 > values.length / 2 ? 0b1 : 0b0;
}

function getGammaRate(values) {
  const bits = [];
  for (let i = 11; i >= 0; i--) {
    bits.push(getMostCommonBitAt(values, i));
  }
  return bits.reduce((acc, bit) => {
    return acc + '' + bit;
  }, '');
}

function getEpsilonRate(gammaRate) {
  return gammaRate
    .split('')
    .map(function (b) {
      return (1 - b).toString();
    })
    .join('');
}

function getResult(input = getInput()) {
  const gammaRate = getGammaRate(input);
  const epsilonRate = getEpsilonRate(gammaRate);
  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
}

module.exports = {
  getBitAt,
  getMostCommonBitAt,
  getGammaRate,
  getEpsilonRate,
  getResult,
};
