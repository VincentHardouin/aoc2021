const input = require('./input');

describe('day07 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result[0]).toBe(1101);
  });
});
