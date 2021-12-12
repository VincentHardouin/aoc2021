const { getInput } = require('./input');

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

  getNonCommonCave(segment) {
    return this.a !== segment.a && this.a !== segment.b ? this.a : this.b;
  }

  getSmallCaves() {
    const smallCaves = [];
    const regex = /[a-z]{2}/;
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
    if (this.path.length === 1) {
      return this.path[0].getOtherCave('start');
    }

    const lastSegment = this.path[this.path.length - 1];
    const beforeLastSegment = this.path[this.path.length - 2];

    return lastSegment.getNonCommonCave(beforeLastSegment);
  }

  getSmallCaves() {
    const allSmallCaves = this.path.reduce((acc, segment) => {
      acc.push(...segment.getSmallCaves());
      return acc;
    }, []);

    return allSmallCaves.filter((cave, index) => index !== allSmallCaves.indexOf(cave));
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
