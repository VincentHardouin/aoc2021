const path = require('path');
const fs = require('fs');

function getInput() {
  return fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map((value) => {
      const points = value.split(' -> ').map((point) => {
        return point.split(',').map((value) => parseInt(value, 10));
      });
      return {
        x1: points[0][0],
        y1: points[0][1],
        x2: points[1][0],
        y2: points[1][1],
      };
    });
}

module.exports = {
  getInput,
};
