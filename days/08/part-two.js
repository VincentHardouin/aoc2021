const { getInput } = require('./input');
const _ = require('lodash');

const EASY_DIGIT = [
  { digit: 1, numberOfSegment: 2 },
  { digit: 4, numberOfSegment: 4 },
  { digit: 7, numberOfSegment: 3 },
  { digit: 8, numberOfSegment: 7 },
];

const NORMAL_SEGMENTS = [
  { digit: 0, segments: 'abcefg' },
  { digit: 1, segments: 'cf' },
  { digit: 2, segments: 'acdeg' },
  { digit: 3, segments: 'acdfg' },
  { digit: 4, segments: 'bcdf' },
  { digit: 5, segments: 'abdfg' },
  { digit: 6, segments: 'abdefg' },
  { digit: 7, segments: 'acf' },
  { digit: 8, segments: 'abcdefg' },
  { digit: 9, segments: 'abcdfg' },
];

class Digit {
  constructor(digit) {
    if (digit instanceof Array) {
      this.digit = digit.join('');
    } else {
      this.digit = digit;
    }
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

  get length() {
    return this.segments.length;
  }

  getCommonPart(digit) {
    return new Digit(this.segments.filter((segment) => digit.segments.includes(segment)));
  }

  getDifference(digit) {
    const difference = this.segments.filter((segment) => !digit.segments.includes(segment));
    return new Digit(difference);
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
    const one = easyDigitInSignalPatterns.find((digit) => digit.length === 2);
    const four = easyDigitInSignalPatterns.find((digit) => digit.length === 4);
    const seven = easyDigitInSignalPatterns.find((digit) => digit.length === 3);

    const six = digits.find((digit) => digit.length === 6 && digit.getCommonPart(one).length === 1);
    const three = digits.find((digit) => digit.length === 5 && digit.getCommonPart(one).length === 2);

    const a = seven.getDifference(one).segments[0];
    const b = four.getDifference(three).segments[0];
    const c = one.getDifference(six).segments[0];
    const d = four.getCommonPart(three).getDifference(one).segments[0];
    const e = six.getDifference(three).getDifference(four).segments[0];
    const f = six.getCommonPart(one).segments[0];
    const g = three.getDifference(four).getDifference(seven).segments[0];

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
