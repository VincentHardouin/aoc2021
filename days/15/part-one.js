const { getInput } = require('./input');
const _ = require('lodash');

class Position {
  constructor(x, y, riskLevel, neighbours) {
    this.x = x;
    this.y = y;
    this.riskLevel = riskLevel;
    this.cost = Infinity;
    this.neighbours = neighbours;
    this.parent = null;
  }

  get key() {
    return `${this.x},${this.y}`;
  }
}

class Cave {
  constructor(positions, start, end) {
    this.positions = positions;
    this.start = start;
    this.end = end;
  }

  getLowestTotalRisk() {
    const visited = new Map();
    this.start.cost = 0;
    let toBeVisited = [this.start];

    while (toBeVisited.length > 0) {
      const position = _.minBy(toBeVisited, 'cost');
      toBeVisited = toBeVisited.filter(
        (positionToVisit) => positionToVisit.x !== position.x || positionToVisit.y !== position.y
      );

      if (visited.get(position.key)) {
        continue;
      }

      visited.set(position.key, position);

      position.neighbours.forEach((neighbour) => {
        const neighbourPosition = this.positions.get(neighbour);
        const cumulativeRiskLevel = position.cost + neighbourPosition.riskLevel;
        if (cumulativeRiskLevel < neighbourPosition.cost) {
          neighbourPosition.cost = cumulativeRiskLevel;
          neighbourPosition.parent = position;
        }

        if (!visited.get(neighbourPosition.key)) {
          toBeVisited.push(neighbourPosition);
        }
      });
    }

    return this.end.cost;
  }
}

function getPositions(input) {
  const positions = new Map();
  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[0].length; x++) {
      const neighbours = [];
      if (y > 0) {
        neighbours.push(`${x},${y - 1}`);
      }
      if (x > 0) {
        neighbours.push(`${x - 1},${y}`);
      }
      if (x < input[0].length - 1) {
        neighbours.push(`${x + 1},${y}`);
      }
      if (y < input.length - 1) {
        neighbours.push(`${x},${y + 1}`);
      }

      const position = new Position(x, y, input[y][x], neighbours);

      positions.set(position.key, position);
    }
  }
  return positions;
}

function getResult(input = getInput()) {
  const positions = getPositions(input);
  const start = positions.get('0,0');
  const end = positions.get(`${input[0].length - 1},${input.length - 1}`);
  const cave = new Cave(positions, start, end);
  return cave.getLowestTotalRisk();
}

module.exports = {
  getResult,
};
