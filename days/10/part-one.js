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

  getFirstIllegalCharacter() {
    const reduce = this.reduce().split('');
    const regex = /[>}\])]/g;
    for (let i = 0; i < reduce.length; i++) {
      if (regex.test(reduce[i])) {
        return reduce[i];
      }
    }
  }

  reduce() {
    const regex = /<>|\[]|{}|\(\)/g;
    let reducedLine = this.line;
    while (this.line !== '' && regex.test(reducedLine)) {
      reducedLine = reducedLine.replace(regex, '');
    }
    return reducedLine;
  }
}

function getResult(input = getInput()) {
  const lines = input.map((line) => new Line(line));
  const corruptedLines = lines.filter((line) => line.isCorrupted());
  const illegalCharacters = corruptedLines.map((line) => line.getFirstIllegalCharacter());
  const illegalCharacterValue = new Map();
  illegalCharacterValue.set(')', 3);
  illegalCharacterValue.set(']', 57);
  illegalCharacterValue.set('}', 1197);
  illegalCharacterValue.set('>', 25137);

  const illegalCharactersValues = illegalCharacters.map((char) => illegalCharacterValue.get(char));
  return _.sum(illegalCharactersValues);
}

module.exports = {
  Line,
  getResult,
};
