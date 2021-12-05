const { getInput } = require('./input');
const _ = require('lodash');

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static getAllPointsBetween({ x1, y1, x2, y2 }) {
    if (x1 === x2) {
      const range = getRange(y1, y2);
      return range.map((y) => new Point(x1, y));
    } else if (y1 === y2) {
      const range = getRange(x1, x2);
      return range.map((x) => new Point(x, y1));
    } else {
      const xRange = getRange(x1, x2);
      const yRange = getRange(y1, y2);

      return xRange.map((x, index) => {
        return new Point(x, yRange[index]);
      });
    }
  }

  getKey() {
    return `${this.x}:${this.y}`;
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
    this.points = new Map();
    for (let line of lines) {
      for (let point of line) {
        this.addPoint(point);
      }
    }
  }

  addPoint(newPoint) {
    let foundPoint = this.points.get(newPoint.getKey());
    if (foundPoint) {
      this.points.set(newPoint.getKey(), ++foundPoint);
    } else {
      this.points.set(newPoint.getKey(), 1);
    }
  }

  dangerousAreas() {
    let dangerousAreas = 0;
    for (const value of this.points.values()) {
      dangerousAreas = value > 1 ? ++dangerousAreas : dangerousAreas;
    }
    return dangerousAreas;
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
