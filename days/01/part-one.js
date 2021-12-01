const { getInput } = require('./input');

class Measure {
  constructor(depth, previousDepth) {
    this.depth = depth;
    this.previousDepth = previousDepth;
  }

  isIncrease() {
    return this.previousDepth ? this.depth - this.previousDepth > 0 : false;
  }
}

function getMeasures(values) {
  return values.map((value, index) => {
    if (index === 0) {
      return new Measure(value);
    }
    return new Measure(value, values[index - 1]);
  });
}

function getNumberOfIncrease(measures) {
  return measures.filter((measure) => measure.isIncrease()).length;
}

function getResult(input = getInput()) {
  const measures = getMeasures(input);
  return getNumberOfIncrease(measures);
}

module.exports = {
  Measure,
  getResult,
};
