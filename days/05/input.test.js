const input = require('./input');

describe('day5 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result[0]).toStrictEqual({ x1: 781, y1: 721, x2: 781, y2: 611 });
  });
});
