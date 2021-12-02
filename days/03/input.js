const path = require('path');
const fs = require('fs');

function getInput() {
  return fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map((value) => {
      const instruction = value.split(' ');
      return {
        instruction: instruction[0],
        units: parseInt(instruction[1], 10),
      };
    });
}

module.exports = {
  getInput,
};
