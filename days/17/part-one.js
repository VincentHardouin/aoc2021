const { getInput } = require('./input');
const { result } = require('lodash/object');

class Trajectory {
  constructor(velocityX, velocityY) {
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.steps = [];
    this.lastStep = { x: 0, y: 0 };
  }

  nextStep() {
    const x = this.lastStep.x + this.velocityX;
    const y = this.lastStep.y + this.velocityY;

    this.lastStep = { x, y };
    this.steps.push(this.lastStep);

    if (this.velocityX > 0) this.velocityX--;
    else if (this.velocityX < 0) this.velocityX++;
    this.velocityY--;
  }
}

function shootProbe(x, y, targetMinX, targetMaxX, targetMinY, targetMaxY) {
  const trajectory = new Trajectory(x, y);
  let maxY = Number.MIN_VALUE;
  let pastTarget = false;
  while (!pastTarget) {
    maxY = trajectory.lastStep.y > maxY ? trajectory.lastStep.y : maxY;
    if (
      targetMinX <= trajectory.lastStep.x &&
      targetMaxX >= trajectory.lastStep.x &&
      targetMinY <= trajectory.lastStep.y &&
      targetMaxY >= trajectory.lastStep.y
    ) {
      return maxY;
    }
    if (trajectory.lastStep.y < targetMinY) {
      pastTarget = true;
    }
    trajectory.nextStep();
  }
  return null;
}

function getResult(input = getInput()) {
  const { minX, maxX, minY, maxY } = input;

  let maxHeight = Number.MIN_VALUE;
  for (let y = minY; y < 500; y++) {
    for (let x = 1; x < maxX; x++) {
      const height = shootProbe(x, y, minX, maxX, minY, maxY);
      maxHeight = height > maxHeight ? height : maxHeight;
    }
  }
  return maxHeight;
}

module.exports = {
  Trajectory,
  getResult,
};
