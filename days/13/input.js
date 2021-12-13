const path = require('path');
const fs = require('fs');

function getInput() {
  const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').toString().trim().split('\n\n');

  const points = input[0].split('\n').map((line) => {
    const point = line.split(',');
    return {
      x: parseInt(point[0], 10),
      y: parseInt(point[1], 10),
    };
  });

  const folds = input[1].split('\n').map((line) => {
    const fold = line.split('=');
    return {
      direction: fold[0].replace('fold along ', ''),
      value: parseInt(fold[1], 10),
    };
  });

  return {
    points,
    folds,
  };
}

module.exports = {
  getInput,
};
