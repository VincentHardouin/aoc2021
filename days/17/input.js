const path = require('path');
const fs = require('fs');
const { parseInt } = require('lodash/string');

function getInput() {
  const values = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .replace('target area: ', '')
    .split(',')
    .map((value) => {
      if (value.includes('x')) {
        return value
          .replace('x=', '')
          .split('..')
          .map((number) => parseInt(number, 10));
      }
      if (value.includes('y')) {
        return value
          .replace('y=', '')
          .split('..')
          .map((number) => parseInt(number, 10));
      }
    });

  return {
    minX: values[0][0],
    maxX: values[0][1],
    minY: values[1][0],
    maxY: values[1][1],
  };
}

module.exports = {
  getInput,
};
