const { getInput } = require('./input');

const EASY_DIGIT = [
  { digit: 1, numberOfSegment: 2 },
  { digit: 4, numberOfSegment: 4 },
  { digit: 7, numberOfSegment: 3 },
  { digit: 8, numberOfSegment: 7 },
];

class Digit {
  constructor(digit) {
    this.digit = digit;
  }

  isEasyDigit() {
    for (let i = 0; i < EASY_DIGIT.length; i++) {
      if (EASY_DIGIT[i].numberOfSegment === this.digit.length) {
        return true;
      }
    }
    return false;
  }
}

function getResult(input = getInput()) {
  const digits = input
    .map((entry) => {
      return entry.fourDigitOutput.map((digit) => {
        return new Digit(digit);
      });
    })
    .flat();
  const easyDigits = digits.filter((digit) => digit.isEasyDigit());
  return easyDigits.length;
}

module.exports = {
  Digit,
  getResult,
};
