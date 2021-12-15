const { getInput } = require('./input');
const _ = require('lodash');

class Position {
  constructor(x, y, riskLevel) {
    this.x = x;
    this.y = y;
    this.riskLevel = riskLevel;
    this.cost = Infinity;
    this.neighbours = [];
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
        const cumulativeRiskLevel = position.cost + neighbour.riskLevel;
        if (cumulativeRiskLevel < neighbour.cost) {
          neighbour.cost = cumulativeRiskLevel;
          neighbour.parent = position;
        }

        if (!visited.get(neighbour.key)) {
          toBeVisited.push(neighbour);
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
      const position = new Position(x, y, input[y][x]);
      positions.set(position.key, position);
    }
  }
  return positions;
}

function getResult(input = getInput()) {
  const positions = getPositions(input);

  const completePositions = new Map();

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      positions.forEach((position) => {
        const newX = position.x + j * input[0].length;
        const newY = position.y + i * input.length;
        const newRiskLevel = ((position.riskLevel + j + i - 1) % 9) + 1;
        const newPosition = new Position(newX, newY, newRiskLevel);
        completePositions.set(newPosition.key, newPosition);
      });
    }
  }

  completePositions.forEach((position, key, map) => {
    const up = map.get(`${position.x},${position.y - 1}`);
    const right = map.get(`${position.x + 1},${position.y}`);
    const bottom = map.get(`${position.x},${position.y + 1}`);
    const left = map.get(`${position.x - 1},${position.y}`);

    const neighbours = [];
    if (up) neighbours.push(up);
    if (right) neighbours.push(right);
    if (bottom) neighbours.push(bottom);
    if (left) neighbours.push(left);
    position.neighbours = neighbours;
  });

  const start = completePositions.get('0,0');
  const end = completePositions.get(`${input[0].length * 5 - 1},${input.length * 5 - 1}`);
  const cave = new Cave(completePositions, start, end);
  return cave.getLowestTotalRisk();
}

module.exports = {
  getResult,
};
