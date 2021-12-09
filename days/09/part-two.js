const { getInput } = require('./input');
const _ = require('lodash');

class Location {
  constructor(x, y, height, adjacentLocationsHeight) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.adjacentLocationsHeight = adjacentLocationsHeight;
  }

  isLowPoints() {
    return this.height < Math.min(...this.adjacentLocationsHeight);
  }
}

class Basin {
  constructor(lowPoint) {
    this.lowPoint = lowPoint;
    this.points = [];
  }

  addPoint(location) {
    if (!this.contains(location)) {
      this.points.push(location);
    }
  }

  contains(location) {
    return !!this.points.find((point) => point.x === location.x && point.y === location.y);
  }
}

function getLocations(input) {
  const locations = [];
  for (let y = 0; y < input.length; y++) {
    const locationInLine = [];
    for (let x = 0; x < input[0].length; x++) {
      const height = input[y][x];
      const adjacentLocationsHeight = [];

      if (y > 0) {
        adjacentLocationsHeight.push(input[y - 1][x]);
      }
      if (x > 0) {
        adjacentLocationsHeight.push(input[y][x - 1]);
      }
      if (y < input.length - 1) {
        adjacentLocationsHeight.push(input[y + 1][x]);
      }
      if (x < input[0].length - 1) {
        adjacentLocationsHeight.push(input[y][x + 1]);
      }

      const location = new Location(x, y, height, adjacentLocationsHeight);
      locationInLine.push(location);
    }
    locations.push(locationInLine);
  }
  return locations;
}

function getAdjacent(location, locations) {
  const x = location.x;
  const y = location.y;
  const adjacentLocations = [];

  if (y > 0) {
    adjacentLocations.push(locations[y - 1][x]);
  }
  if (x > 0) {
    adjacentLocations.push(locations[y][x - 1]);
  }
  if (y < locations.length - 1) {
    adjacentLocations.push(locations[y + 1][x]);
  }
  if (x < locations[0].length - 1) {
    adjacentLocations.push(locations[y][x + 1]);
  }
  return adjacentLocations;
}

function getBasin(basin, locations) {
  let current = basin.lowPoint.height;
  let neighbours = getAdjacent(basin.lowPoint, locations);

  while (neighbours.length !== 0 && current < 8) {
    current++;
    let upWardNeighbours = neighbours.filter((neighbour) => neighbour.height < 9 && neighbour.height > current - 1);
    upWardNeighbours.forEach((neighbour) => {
      basin.addPoint(neighbour);
    });
    neighbours = upWardNeighbours.map((neighbour) => getAdjacent(neighbour, locations)).flat();
  }
}

function getResult(input = getInput()) {
  const locations = getLocations(input);
  const lowPoints = locations.flat().filter((location) => location.isLowPoints());
  const basins = lowPoints.map((lowPoint) => new Basin(lowPoint));

  basins.forEach((basin) => {
    getBasin(basin, locations);
  });

  return _(basins)
    .sortBy((basin) => basin.points.length)
    .takeRight(3)
    .reduce((acc, basin) => {
      return acc * (basin.points.length + 1);
    }, 1);
}

module.exports = {
  getResult,
};
