const path = require('path');
const fs = require('fs');

function getInput() {
  return fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').toString().trim();
}

module.exports = {
  getInput,
};
