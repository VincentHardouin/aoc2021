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

function getResult(input = getInput()) {
  const lanternfishs = input.map((timer) => new Lanternfish(timer));
  for (let day = 0; day < 80; day++) {
    const lanternfishToAdd = [];
    for (let i = 0; i < lanternfishs.length; i++) {
      const newLanternfish = lanternfishs[i].nextDay();
      if (newLanternfish) {
        lanternfishToAdd.push(newLanternfish);
      }
    }
    lanternfishs.push(...lanternfishToAdd);
  }
  return lanternfishs.length;
}

module.exports = {
  Lanternfish,
  getResult,
};
