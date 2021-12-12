const input = require('./input');

describe('day12 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result[0]).toStrictEqual(['CV', 'mk']);
  });
});
