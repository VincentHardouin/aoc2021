const path = require('path');
const fs = require('fs');

function getInput() {
  return fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map((value) => {
      const entry = value.split('|');
      return {
        uniqSignalPattern: entry[0].trim(),
        fourDigitOutput: entry[1].trim().split(' '),
      };
    });
}

module.exports = {
  getInput,
};
