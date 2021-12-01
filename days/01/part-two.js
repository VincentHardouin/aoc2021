const _ = require('lodash');
const { getInput } = require('./input');

class Measure {
  constructor(depths) {
    this.depths = depths;
  }

  getSum() {
    return _.sum(this.depths);
  }

  isIncrease(measure) {
    return this.getSum() > measure.getSum();
  }
}

function getMeasures(values, batchSize = 3) {
  const measures = [];
  for (let i = batchSize; i <= values.length; i++) {
    const depths = [];
    for (let o = i - batchSize; o < i; o++) {
      depths.push(values[o]);
    }
    measures.push(new Measure(depths));
  }
  return measures;
}

function getNumberOfIncrease(measures) {
  let numberOfIncrease = 0;
  for (let i = 1; i < measures.length; i++) {
    if (measures[i].isIncrease(measures[i - 1])) {
      numberOfIncrease++;
    }
  }
  return numberOfIncrease;
}

function getResult(input = getInput()) {
  const measures = getMeasures(input);
  return getNumberOfIncrease(measures);
}

module.exports = {
  Measure,
  getMeasures,
  getResult,
};
