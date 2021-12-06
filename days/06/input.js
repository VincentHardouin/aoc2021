const path = require('path');
const fs = require('fs');

function getInput() {
  return fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split(',')
    .map((value) => {
      return parseInt(value, 10);
    });
}

module.exports = {
  getInput,
};
