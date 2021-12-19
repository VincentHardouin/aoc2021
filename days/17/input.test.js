const input = require('./input');

describe('day17 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result).toStrictEqual({
      minX: 155,
      maxX: 182,
      minY: -117,
      maxY: -67,
    });
  });
});
