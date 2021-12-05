const { getInput } = require('./input');
const _ = require('lodash');

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.overlap = 1;
  }

  addOverlap() {
    this.overlap++;
  }

  static getAllPointsBetween({ x1, y1, x2, y2 }) {
    if (x1 === x2) {
      const range = getRange(y1, y2);
      return range.map((y) => new Point(x1, y));
    } else if (y1 === y2) {
      const range = getRange(x1, x2);
      return range.map((x) => new Point(x, y1));
    }
    return [];
  }
}

function getRange(start, end) {
  if (start < end) {
    const range = _.range(start, end, 1);
    range.push(end);
    return range;
  }

  const range = _.rangeRight(end, start, 1);
  range.unshift(start);
  return range;
}

class Grid {
  constructor(lines) {
    this.points = [];
    for (let line of lines) {
      for (let point of line) {
        this.addPoint(point);
      }
    }
  }

  addPoint(newPoint) {
    const foundPoint = this.points.find((point) => point.x === newPoint.x && point.y === newPoint.y);
    if (foundPoint) {
      foundPoint.addOverlap();
    } else {
      this.points.push(newPoint);
    }
  }

  dangerousAreas() {
    return this.points.filter((point) => point.overlap > 1).length;
  }
}

function getResult(input = getInput()) {
  const lines = input.map((line) => Point.getAllPointsBetween(line));
  const grid = new Grid(lines);
  return grid.dangerousAreas();
}

module.exports = {
  Point,
  getResult,
};
