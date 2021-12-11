const { getInput } = require('./input');

class DumboOctopus {
  constructor(energy, x, y) {
    this.energy = energy;
    this.x = x;
    this.y = y;
    this.flash = 0;
    this.hasFlashedInPreviousRound = false;
  }

  nextStep() {
    if (this.energy === 9) {
      this.energy = 0;
      this.flash++;
      this.hasFlashedInPreviousRound = true;
    } else {
      this.energy++;
      this.hasFlashedInPreviousRound = false;
    }
  }
}

class Octopuses {
  constructor(octopuses) {
    this.grid = octopuses;
    this.sum = octopuses.length * octopuses[0].length;
  }

  nextStep() {
    this.grid.forEach((line) => {
      line.forEach((octopus) => octopus.nextStep());
    });

    const flashingOctopuses = this.getFlashingOctopuses(this.grid.flat());
    flashingOctopuses.forEach((octopus) => this.increaseAdjacentToFlashingOctopuses(octopus));
  }

  increaseAdjacentToFlashingOctopuses(octopus) {
    const adjacents = this.getAdjacent(octopus.x, octopus.y);
    const newFlashingOctopuses = [];
    adjacents.forEach((octopus) => {
      if (!octopus.hasFlashedInPreviousRound) {
        octopus.nextStep();
        if (octopus.hasFlashedInPreviousRound) {
          newFlashingOctopuses.push(octopus);
        }
      }
    });
    newFlashingOctopuses.forEach((octopus) => this.increaseAdjacentToFlashingOctopuses(octopus));
  }

  getFlashingOctopuses(octopus) {
    return octopus.filter((octopus) => octopus.hasFlashedInPreviousRound);
  }

  getAdjacent(x, y) {
    const adjacents = [];

    if (y > 0) {
      adjacents.push(this.grid[y - 1][x]);
    }
    if (y > 0 && x > 0) {
      adjacents.push(this.grid[y - 1][x - 1]);
    }
    if (y > 0 && x < this.grid[0].length - 1) {
      adjacents.push(this.grid[y - 1][x + 1]);
    }
    if (x > 0) {
      adjacents.push(this.grid[y][x - 1]);
    }
    if (x < this.grid[0].length - 1) {
      adjacents.push(this.grid[y][x + 1]);
    }
    if (y < this.grid.length - 1 && x > 0) {
      adjacents.push(this.grid[y + 1][x - 1]);
    }
    if (y < this.grid.length - 1) {
      adjacents.push(this.grid[y + 1][x]);
    }
    if (y < this.grid.length - 1 && x < this.grid[0].length - 1) {
      adjacents.push(this.grid[y + 1][x + 1]);
    }

    return adjacents;
  }

  areAllFlashing() {
    const sumOfFlashing = this.grid.reduce((acc, line) => {
      const sum = line.reduce((acc2, octopus) => {
        return octopus.hasFlashedInPreviousRound ? ++acc2 : acc2;
      }, 0);
      return acc + sum;
    }, 0);
    return this.sum === sumOfFlashing;
  }

  getFirstStepWhenAllFlash() {
    let n = 0;
    while (!this.areAllFlashing()) {
      this.nextStep();
      n++;
    }
    return n;
  }

  static createFromEnergiesGrid(grid) {
    const dumboOctopuses = [];
    grid.forEach((line, y) => {
      const octopusesInLine = [];
      line.forEach((energy, x) => {
        octopusesInLine.push(new DumboOctopus(energy, x, y));
      });
      dumboOctopuses.push(octopusesInLine);
    });
    return new Octopuses(dumboOctopuses);
  }
}

function getResult(input = getInput()) {
  const octopuses = Octopuses.createFromEnergiesGrid(input);
  return octopuses.getFirstStepWhenAllFlash();
}

module.exports = {
  DumboOctopus,
  Octopuses,
  getResult,
};
