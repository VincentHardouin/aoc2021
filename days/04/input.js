const path = require('path');
const fs = require('fs');

function getInput() {
  const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').toString().trim().split('\n\n');
  const drawnNumbers = input
    .shift()
    .split(',')
    .map((number) => parseInt(number, 10));
  const boards = input.map((board) => {
    return board.split('\n').map((raw) => {
      return raw
        .trim()
        .split(/\s+/g)
        .map((value) => parseInt(value, 10));
    });
  });

  return { drawnNumbers, boards };
}

module.exports = {
  getInput,
};
