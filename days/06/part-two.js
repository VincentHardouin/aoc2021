const { getInput } = require('./input');

class Lanternfish {
  constructor(timer) {
    this.timer = timer;
  }

  nextDay() {
    if (this.timer === 0) {
      this.timer = 6;
      return new Lanternfish(8);
    }
    this.timer--;
    return null;
  }
}

class State {
  constructor(lanternfishs) {
    this.state = new Map();
    lanternfishs.forEach((timer) => {
      let foundTimer = this.state.get(timer);
      if (foundTimer) {
        this.state.set(timer, ++foundTimer);
      } else {
        this.state.set(timer, 1);
      }
    });
  }

  nextDay() {
    const newState = new Map();
    for (let [timer, number] of this.state) {
      const lanternfish = new Lanternfish(timer);
      const newLanternfish = lanternfish.nextDay();
      const foundTimer = newState.get(lanternfish.timer);
      if (foundTimer) {
        newState.set(lanternfish.timer, foundTimer + number);
      } else {
        newState.set(lanternfish.timer, number);
      }
      if (newLanternfish) {
        newState.set(newLanternfish.timer, number);
      }
    }
    this.state = newState;
  }

  length() {
    let length = 0;
    for (let number of this.state.values()) {
      length += number;
    }
    return length;
  }
}

function getResult(input = getInput()) {
  const state = new State(input);
  for (let day = 0; day < 256; day++) {
    state.nextDay();
  }
  return state.length();
}

module.exports = {
  Lanternfish,
  getResult,
};
