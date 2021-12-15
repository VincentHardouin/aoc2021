const path = require('path');
const fs = require('fs');

function getInput() {
  return fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map((line) => {
      return line.split('').map((value) => parseInt(value, 10));
    });
}

module.exports = {
  getInput,
};
