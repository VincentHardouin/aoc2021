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
  constructor(polymer, rules, number) {
    this.polymer = polymer;
    this.rules = rules;
    this.number = number;
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
    for (const [key, value] of Object.entries(analytics)) {
      analytics[key] = value * this.number;
    }
    return analytics;
  }
}

function getMinAndMax(object) {
  const minKey = Object.keys(object).reduce((a, b) => (object[a] < object[b] ? a : b));
  const maxKey = Object.keys(object).reduce((a, b) => (object[a] > object[b] ? a : b));
  return {
    min: object[minKey],
    max: object[maxKey],
  };
}

function getResult(input = getInput()) {
  const rules = new Rules(input.rules);
  let polymers = new Map();
  polymers.set(input.polymer, new Polymer(input.polymer, rules, 1));

  for (let i = 0; i < 40; i++) {
    const newPolymers = new Map();
    polymers.forEach((polymer) => {
      polymer.nextStep();
      const pairs = polymer.getPairs();
      pairs.forEach((pair) => {
        let number = polymer.number;
        if (newPolymers.has(pair)) {
          number += newPolymers.get(pair).number;
        }
        newPolymers.set(pair, new Polymer(pair, rules, number));
      });
    });
    polymers = newPolymers;
  }

  const analytics = [...polymers.values()]
    .map((polymer) => polymer.getAnalytics())
    .reduce((acc, analytic) => {
      for (const [key, value] of Object.entries(analytic)) {
        if (acc[key]) {
          acc[key] += value;
        } else {
          acc[key] = value;
        }
      }
      return acc;
    }, {});

  const { min, max } = getMinAndMax(analytics);
  return Math.ceil((max - min) / 2);
}

module.exports = {
  Rules,
  Polymer,
  getResult,
};
