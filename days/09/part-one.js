const { getInput } = require('./input');
const _ = require('lodash');

class Location {
  constructor(height, adjacentLocationsHeight) {
    this.height = height;
    this.adjacentLocationsHeight = adjacentLocationsHeight;
  }

  isLowPoints() {
    return this.height < Math.min(...this.adjacentLocationsHeight);
  }

  get lowPointValue() {
    return 1 + this.height;
  }
}

function getResult(input = getInput()) {
  const locations = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      const height = input[i][j];
      const adjacentLocationsHeight = [];

      if (i > 0) {
        adjacentLocationsHeight.push(input[i - 1][j]);
      }
      if (j > 0) {
        adjacentLocationsHeight.push(input[i][j - 1]);
      }
      if (i < input.length - 1) {
        adjacentLocationsHeight.push(input[i + 1][j]);
      }
      if (j < input[0].length - 1) {
        adjacentLocationsHeight.push(input[i][j + 1]);
      }

      const location = new Location(height, adjacentLocationsHeight);
      locations.push(location);
    }
  }
  const lowPoints = locations.filter((location) => location.isLowPoints());
  return _.sumBy(lowPoints, (location) => location.lowPointValue);
}

module.exports = {
  getResult,
};
