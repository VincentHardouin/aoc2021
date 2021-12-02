const { getInput } = require('./input');

class Position {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  addForward(units) {
    this.x += units;
  }

  addDown(units) {
    this.y += units;
  }

  addUp(units) {
    this.y -= units;
  }

  addInstruction({ instruction, units }) {
    switch (instruction) {
      case 'forward':
        this.addForward(units);
        break;
      case 'down':
        this.addDown(units);
        break;
      case 'up':
        this.addUp(units);
        break;
    }
  }
}

function getFinalPosition(instructions) {
  const positon = new Position();
  instructions.forEach((instruction) => {
    positon.addInstruction(instruction);
  });
  return positon;
}

function getResult(input = getInput()) {
  const finalPosition = getFinalPosition(input);
  return finalPosition.x * finalPosition.y;
}

module.exports = {
  Position,
  getFinalPosition,
  getResult,
};
