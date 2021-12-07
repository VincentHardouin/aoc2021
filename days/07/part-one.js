const { getInput } = require('./input');

function computeFuelCost(positions) {
  const fuelCosts = [];
  const max = Math.max(...positions);
  for (let i = 0; i < max; i++) {
    let fuelCost = 0;
    for (let j = 0; j < positions.length; j++) {
      fuelCost += Math.abs(positions[j] - i);
    }
    fuelCosts.push(fuelCost);
  }
  return Math.min(...fuelCosts);
}

function getResult(input = getInput()) {
  return computeFuelCost(input);
}

module.exports = {
  getResult,
};
