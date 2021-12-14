const { getInput } = require('./input');
const _ = require('lodash');

class Rules {
  constructor(rules) {
    this.rules = rules;
  }

  getPairInsertion(pair) {
    return this.rules.get(pair);
  }
}

class Polymer {
  constructor(polymer, rules) {
    this.polymer = polymer;
    this.rules = rules;
  }

  getPairs() {
    const polymer = this.polymer.split('');
    const pairs = [];
    for (let i = 0; i < polymer.length - 1; i++) {
      const pair = `${polymer[i]}${polymer[i + 1]}`;
      pairs.push(pair);
    }
    return pairs;
  }

  nextStep() {
    const pairs = this.getPairs();
    const newElements = [];
    for (let i = 0; i < pairs.length; i++) {
      let elements = pairs[i].charAt(0) + this.rules.getPairInsertion(pairs[i]);
      newElements.push(elements);
    }
    newElements.push(pairs[pairs.length - 1].charAt(1));
    this.polymer = newElements.join('');
  }

  getAnalytics() {
    const elements = this.polymer.split('');
    const analytics = _.countBy(elements);
    const minKey = Object.keys(analytics).reduce((a, b) => (analytics[a] < analytics[b] ? a : b));
    const maxKey = Object.keys(analytics).reduce((a, b) => (analytics[a] > analytics[b] ? a : b));
    return {
      min: analytics[minKey],
      max: analytics[maxKey],
    };
  }
}

function getResult(input = getInput()) {
  const rules = new Rules(input.rules);
  const polymer = new Polymer(input.polymer, rules);
  for (let i = 0; i < 10; i++) {
    polymer.nextStep();
  }
  const { min, max } = polymer.getAnalytics();
  return max - min;
}

module.exports = {
  Rules,
  Polymer,
  getResult,
};
