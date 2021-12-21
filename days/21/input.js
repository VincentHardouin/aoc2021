const path = require('path');
const fs = require('fs');

function getInput() {
  return fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map((value) => {
      const player = value.split(' starting position: ');

      return {
        name: player[0],
        position: parseInt(player[1], 10),
      };
    });
}

module.exports = {
  getInput,
};
