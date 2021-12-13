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
}

function getResult(input = getInput()) {
  const points = input.points.map((point) => new Point(point));
  const paper = new Paper(points);
  paper.fold(input.folds[0]);
  return paper.points.size;
}

module.exports = {
  Point,
  Paper,
  getResult,
};
