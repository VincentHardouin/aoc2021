const { getInput } = require('./input');
const _ = require('lodash');

const EASY_DIGIT = [
  { digit: 1, numberOfSegment: 2 },
  { digit: 4, numberOfSegment: 4 },
  { digit: 7, numberOfSegment: 3 },
  { digit: 8, numberOfSegment: 7 },
];

const NORMAL_SEGMENTS = [
  { digit: 0, segments: 'abcefg', length: 6 },
  { digit: 1, segments: 'cf', length: 2 },
  { digit: 2, segments: 'acdeg', length: 6 },
  { digit: 3, segments: 'acdfg', length: 5 },
  { digit: 4, segments: 'bcdf', length: 4 },
  { digit: 5, segments: 'abdfg', length: 5 },
  { digit: 6, segments: 'abdefg', length: 6 },
  { digit: 7, segments: 'acf', length: 3 },
  { digit: 8, segments: 'abcdefg', length: 7 },
  { digit: 9, segments: 'abcdfg', length: 6 },
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

  get segments() {
    return this.digit.split('');
  }

  getCommonPart(digit) {
    return this.segments.filter((segment) => digit.segments.includes(segment));
  }

  getDifference(digit) {
    return this.segments.filter((segment) => !digit.segments.includes(segment));
  }
}

class SevenSegments {
  constructor({ a, b, c, d, e, f, g }) {
    this.segments = new Map();
    this.segments.set('a', a);
    this.segments.set('b', b);
    this.segments.set('c', c);
    this.segments.set('d', d);
    this.segments.set('e', e);
    this.segments.set('f', f);
    this.segments.set('g', g);
  }

  get(value) {
    const normalSegment = NORMAL_SEGMENTS.find((segment) => segment.digit === value);
    return normalSegment.segments.split('').map((segment) => {
      return this.segments.get(segment);
    });
  }

  getByDigit(digit) {
    const normalizedDigit = digit.segments
      .map((segment) => {
        for (let [key, value] of this.segments) {
          if (value === segment) {
            return key;
          }
        }
      })
      .sort()
      .join('');
    return NORMAL_SEGMENTS.find((segment) => segment.segments === normalizedDigit).digit;
  }

  static createSegmentFromSignalPattern(signalPattern) {
    const digits = signalPattern.map((digit) => new Digit(digit));
    const easyDigitInSignalPatterns = digits.filter((signal) => signal.isEasyDigit());
    const one = easyDigitInSignalPatterns.find((digit) => digit.segments.length === 2);
    const four = easyDigitInSignalPatterns.find((digit) => digit.segments.length === 4);
    const seven = easyDigitInSignalPatterns.find((digit) => digit.segments.length === 3);

    const sixSegments = digits.filter((digit) => digit.segments.length === 6);
    const fiveSegments = digits.filter((digit) => digit.segments.length === 5);
    const six = sixSegments.find((digit) => digit.getCommonPart(one).length === 1);
    const three = fiveSegments.find((digit) => digit.getCommonPart(one).length === 2);

    const commonBetweenThreeAndFour = four.getCommonPart(three);
    const differenceBetweenThreeAndFour = three.getDifference(four);

    const a = seven.segments.find((segment) => !one.segments.find((s) => s === segment));
    const b = four.getDifference(three)[0];
    const c = one.getDifference(six)[0];
    const d = new Digit(commonBetweenThreeAndFour.join('')).getDifference(one)[0];
    const e = new Digit(six.getDifference(three).join('')).getDifference(four)[0];
    const f = six.getCommonPart(one)[0];
    const g = new Digit(differenceBetweenThreeAndFour.join('')).getDifference(seven)[0];

    return new SevenSegments({ a, b, c, d, e, f, g });
  }
}

class Entry {
  constructor({ uniqSignalPattern, fourDigitOutput }) {
    this.signalPattern = SevenSegments.createSegmentFromSignalPattern(uniqSignalPattern);
    this.fourDigit = fourDigitOutput.map((digit) => new Digit(digit));
  }

  get fourDigitValue() {
    return this.fourDigit.reduce((acc, digit) => {
      return acc + this.signalPattern.getByDigit(digit);
    }, '');
  }
}

function getResult(input = getInput()) {
  const entries = input.map((entry) => {
    return new Entry(entry);
  });
  return _.sumBy(entries, (entry) => parseInt(entry.fourDigitValue, 10));
}

module.exports = {
  Digit,
  SevenSegments,
  getResult,
};
