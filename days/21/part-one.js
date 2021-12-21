const { getInput } = require('./input');
const _ = require('lodash');

class Player {
  constructor({ name, position }) {
    this.name = name;
    this.position = position;
    this.score = 0;
  }

  move(number) {
    this.position = ((this.position + number - 1) % 10) + 1;
  }

  nextRound(dice) {
    const rolls = _.times(3, () => dice.rolls());
    const sum = _.sum(rolls);
    this.move(sum);
    this.score += this.position;
  }

  hasWin() {
    return this.score >= 1000;
  }
}

class DeterministicDice {
  constructor(maxValue = 100) {
    this.maxValue = maxValue;
    this.position = 0;
    this.rollNumber = 0;
  }

  rolls() {
    this.rollNumber++;
    this.position++;
    if (this.position > this.maxValue) {
      this.position = 1;
    }
    return this.position;
  }
}

function getResult(input = getInput()) {
  const players = input.map((player) => new Player(player));
  const dice = new DeterministicDice();

  let onePlayerHasWin = false;
  while (!onePlayerHasWin) {
    players[0].nextRound(dice);
    if (players[0].hasWin()) {
      break;
    }
    players[1].nextRound(dice);
    if (players[1].hasWin()) {
      break;
    }
  }

  const losingPlayer = players.filter((player) => !player.hasWin());

  return dice.rollNumber * losingPlayer[0].score;
}

module.exports = {
  getResult,
};
