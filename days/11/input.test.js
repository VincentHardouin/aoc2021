const input = require('./input');

describe('day11 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result.length).toBe(10);
    expect(result[0].length).toBe(10);
    expect(result[0]).toStrictEqual([4, 7, 3, 8, 6, 1, 5, 5, 5, 6]);
  });
});
