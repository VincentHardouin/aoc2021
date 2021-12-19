const { getInput } = require('./input');

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
  let pastTarget = false;
  while (!pastTarget) {
    if (
      targetMinX <= trajectory.lastStep.x &&
      targetMaxX >= trajectory.lastStep.x &&
      targetMinY <= trajectory.lastStep.y &&
      targetMaxY >= trajectory.lastStep.y
    ) {
      return true;
    }
    if (trajectory.lastStep.y < targetMinY) {
      pastTarget = true;
    }
    trajectory.nextStep();
  }
  return false;
}

function getResult(input = getInput()) {
  const { minX, maxX, minY, maxY } = input;

  let hit = 0;
  for (let y = minY; y < 200; y++) {
    for (let x = 0; x < 200; x++) {
      const hasHit = shootProbe(x, y, minX, maxX, minY, maxY);
      if (hasHit) {
        hit++;
      }
    }
  }
  return hit;
}

module.exports = {
  Trajectory,
  getResult,
};
