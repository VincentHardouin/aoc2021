const path = require('path');
const fs = require('fs');

function getInput() {
  const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').toString().trim().split('\n\n');
  const rules = new Map();
  input[1].split('\n').map((line) => {
    const rule = line.split(' -> ');
    rules.set(rule[0], rule[1]);
  });
  return {
    polymer: input[0],
    rules,
  };
}

module.exports = {
  getInput,
};
