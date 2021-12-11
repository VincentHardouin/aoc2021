const path = require('path');
const fs = require('fs');

function getInput() {
  return fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map((value) => {
      return value.split('').map((number) => parseInt(number, 10));
    });
}

module.exports = {
  getInput,
};
