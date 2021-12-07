const { getInput } = require('./input');

function computeTotalFuelCost(positions) {
  const fuelCosts = [];
  const max = Math.max(...positions);
  for (let i = 0; i < max; i++) {
    let fuelCost = 0;
    for (let j = 0; j < positions.length; j++) {
      fuelCost += computeFuelCost(Math.abs(positions[j] - i));
    }
    fuelCosts.push(fuelCost);
  }
  return Math.min(...fuelCosts);
}

function computeFuelCost(moves) {
  let number = 0;
  for (let i = 1; i <= moves; i++) {
    number += i;
  }
  return number;
}

function getResult(input = getInput()) {
  return computeTotalFuelCost(input);
}

module.exports = {
  getResult,
};
