const input = require('./input');

describe('day09 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result[0]).toStrictEqual([
      7, 6, 5, 9, 9, 9, 1, 0, 9, 8, 9, 9, 9, 8, 7, 6, 5, 7, 9, 9, 1, 0, 1, 2, 9, 8, 7, 9, 9, 9, 9, 8, 7, 6, 4, 3, 2, 1,
      2, 3, 4, 5, 9, 8, 7, 4, 3, 4, 5, 5, 6, 7, 8, 9, 0, 1, 2, 6, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 8, 8, 9, 7, 5, 7, 6, 7,
      8, 9, 9, 3, 2, 3, 4, 5, 6, 9, 8, 9, 7, 6, 7, 8, 9, 9, 4, 3, 2, 1, 0, 1,
    ]);
  });
});
