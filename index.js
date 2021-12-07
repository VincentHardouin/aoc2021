const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const days = require('./days');

function getArgv() {
  return yargs(hideBin(process.argv))
    .option('day', {
      type: 'number',
      description: 'Day, between 1 and 25',
    })
    .option('part', {
      type: 'number',
      description: 'Part, 1 or 2',
      default: 1,
    })
    .check((argv) => {
      if (!argv.day) {
        throw new Error('Day should be defined.');
      }

      if (argv.day < 1 || argv.day > 25) {
        throw new Error('Day should be between 1 and 25.');
      }

      if (argv.part !== 1 && argv.part !== 2) {
        throw new Error('Part should be 1 or 2');
      }

      return true;
    }).argv;
}

function getDayResult(day, part) {
  const dayPath = path.join(__dirname, './days', days[day - 1]);
  const dayModule = require(dayPath);
  console.time('t');
  console.log(`Day: ${day}, Part: ${part}, Result: ${dayModule[part - 1]()}`);
  console.timeEnd('t');
}

function main() {
  const argv = getArgv();
  getDayResult(argv.day, argv.part);
}
main();
