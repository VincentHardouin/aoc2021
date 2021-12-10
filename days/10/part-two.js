const { getInput } = require('./input');
const _ = require('lodash');

class Line {
  constructor(line) {
    this.line = line;
  }

  isCorrupted() {
    const reduce = this.reduce();
    const regex = /<}|\[}|\(}|<]|{]|\(]|<\)|{\)|\[\)|\(>|{>|\[>/g;
    return regex.test(reduce);
  }

  isIncomplete() {
    return this.reduce() !== '' && !this.isCorrupted();
  }

  reduce() {
    const regex = /<>|\[]|{}|\(\)/g;
    let reducedLine = this.line;
    while (this.line !== '' && regex.test(reducedLine)) {
      reducedLine = reducedLine.replace(regex, '');
    }
    return reducedLine;
  }

  getCompletion() {
    return this.reduce()
      .split('')
      .reverse()
      .map((char) => {
        if (char === '{') {
          return '}';
        } else if (char === '[') {
          return ']';
        } else if (char === '(') {
          return ')';
        } else if (char === '<') {
          return '>';
        }
      })
      .join('');
  }
}

function getScore(completion) {
  return completion
    .split('')
    .map((char) => {
      if (char === ')') {
        return 1;
      } else if (char === ']') {
        return 2;
      } else if (char === '}') {
        return 3;
      } else if (char === '>') {
        return 4;
      }
    })
    .reduce((acc, value) => {
      return acc * 5 + value;
    }, 0);
}

function getResult(input = getInput()) {
  const lines = input.map((line) => new Line(line));
  const completions = lines.filter((line) => line.isIncomplete()).map((line) => line.getCompletion());
  const scores = completions.map(getScore).sort((a, b) => a - b);
  return scores[Math.floor(scores.length / 2)];
}

module.exports = {
  Line,
  getResult,
};
