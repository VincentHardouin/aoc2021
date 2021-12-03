const { getInput } = require('./input');

function getBitAt(value, position) {
  return (value >> position) & 1;
}

function getMostCommonBitAt(values, position) {
  let numberOf1 = 0;
  values.forEach((value) => {
    const bit = value.charAt(position);
    if (bit === '1') {
      numberOf1++;
    }
  });

  return numberOf1 >= values.length / 2 ? '1' : '0';
}

function getOxygenGeneratorRating(values) {
  let filtered = values;
  for (let i = 0; i < values[0].length; i++) {
    if (filtered.length === 1) {
      continue;
    }
    const mostCommonBitAt = getMostCommonBitAt(filtered, i);
    filtered = filtered.filter((value) => {
      return mostCommonBitAt === value.charAt(i);
    });
  }
  return filtered[0];
}

function getCO2ScrubberRating(values) {
  let filtered = values;
  for (let i = 0; i < values[0].length; i++) {
    if (filtered.length === 1) {
      continue;
    }
    const mostCommonBitAt = getMostCommonBitAt(filtered, i);
    filtered = filtered.filter((value) => {
      return mostCommonBitAt !== value.charAt(i);
    });
  }
  return filtered[0];
}

function getResult(input = getInput()) {
  const oxygen = getOxygenGeneratorRating(input);
  const co2Scrubber = getCO2ScrubberRating(input);
  return parseInt(oxygen, 2) * parseInt(co2Scrubber, 2);
}

module.exports = {
  getBitAt,
  getMostCommonBitAt,
  getOxygenGeneratorRating,
  getCO2ScrubberRating,
  getResult,
};
