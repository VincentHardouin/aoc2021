const { getInput } = require('./input');

class Point {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
  }

  get key() {
    return `${this.x}:${this.y}`;
  }

  distance(x, y) {
    return Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2));
  }

  symmetryFrom(direction, value) {
    const distance = direction === 'x' ? this.distance(value, this.y) : this.distance(this.x, value);
    this[direction] = this[direction] - 2 * distance;
  }
}

class Paper {
  constructor(points) {
    this.points = new Map();
    points.forEach((point) => this.points.set(point.key, point));
  }

  fold({ direction, value }) {
    const newPoints = new Map();
    for (const [key, point] of this.points) {
      if (point[direction] > value) {
        point.symmetryFrom(direction, value);
      }
      if (!newPoints.has(point.key)) {
        newPoints.set(point.key, point);
      }
    }
    this.points = newPoints;
  }

  print() {
    const arrayToPrint = Array(6)
      .fill(' ')
      .map((x) => Array(40).fill('🟦'));
    for (const [key, point] of this.points) {
      arrayToPrint[point.y][point.x] = '⬜️';
    }

    for (let y = 0; y < arrayToPrint.length; y++) {
      let line = '';
      for (let x = 0; x < arrayToPrint[0].length; x++) {
        line += arrayToPrint[y][x];
      }
      console.log(line);
    }
  }
}

function getResult(input = getInput()) {
  const points = input.points.map((point) => new Point(point));
  const paper = new Paper(points);
  input.folds.forEach((fold) => paper.fold(fold));
  paper.print();
  return paper.points.size;
}

module.exports = {
  Point,
  Paper,
  getResult,
};
