const { getInput } = require('./input');
const _ = require('lodash');
const { value } = require('lodash/seq');

class Segment {
  constructor(segment) {
    this.a = segment[0];
    this.b = segment[1];
  }

  contains(value) {
    return this.a === value || this.b === value;
  }

  getOtherCave(value) {
    return value === this.a ? this.b : this.a;
  }

  getSmallCaves() {
    const smallCaves = [];
    const regex = /[a-z]/;
    if (regex.test(this.a) && this.a !== 'start' && this.a !== 'end') {
      smallCaves.push(this.a);
    }
    if (regex.test(this.b) && this.b !== 'start' && this.b !== 'end') {
      smallCaves.push(this.b);
    }
    return smallCaves;
  }

  includes(caves) {
    return [this.a, this.b].some((point) => caves.includes(point));
  }
}

class Path {
  constructor(segments) {
    this.path = [...segments];
  }

  getLastCave() {
    let otherCave = this.path[0].getOtherCave('start');
    for (let i = 1; i < this.path.length; i++) {
      otherCave = this.path[i].getOtherCave(otherCave);
    }
    return otherCave;
  }

  getSmallCaves() {
    const allSmallCaves = this.path.reduce((acc, segment) => {
      acc.push(...segment.getSmallCaves());
      return acc;
    }, []);
    const caves = _.countBy(allSmallCaves);

    const remainingCaves = [];
    let visitingTwice = null;
    for (const [key, value] of Object.entries(caves)) {
      if (value > 2) {
        visitingTwice = key;
        if (value === 4) {
          remainingCaves.push(key);
        }
      } else if (value === 2) {
        remainingCaves.push(key);
      }
    }

    return visitingTwice ? remainingCaves : [];
  }

  getAllPathPossibilitiesFromSegments(segments) {
    const lastCave = this.getLastCave();
    if (lastCave === 'end') {
      return [this];
    }
    const visitedSmallCaves = this.getSmallCaves();
    const possibilities = segments.filter(
      (segment) => segment.contains(lastCave) && !segment.includes(visitedSmallCaves)
    );
    return possibilities.map((possibility) => new Path([...this.path, possibility]));
  }
}

function getResult(input = getInput()) {
  const segments = input.map((segment) => new Segment(segment));
  let paths = segments.filter((segment) => segment.contains('start')).map((segment) => new Path([segment]));
  let remainingSegments = segments.filter((segment) => !segment.contains('start'));

  while (paths.filter((path) => path.getLastCave() === 'end').length !== paths.length) {
    paths = paths.map((path) => path.getAllPathPossibilitiesFromSegments(remainingSegments)).flat();
  }
  return paths.length;
}

module.exports = {
  Path,
  Segment,
  getResult,
};
