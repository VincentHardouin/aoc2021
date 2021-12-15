const input = require('./input');

describe('day15 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result[0][0]).toBe(7);
  });
});
