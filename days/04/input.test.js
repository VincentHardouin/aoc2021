const input = require('./input');

describe('day4 | input', () => {
  it('should return drawnNumbers', () => {
    const result = input.getInput();

    expect(result.drawnNumbers).toStrictEqual([
      17, 58, 52, 49, 72, 33, 55, 73, 27, 69, 88, 80, 9, 7, 59, 98, 63, 42, 84, 37, 87, 28, 97, 66, 79, 77, 61, 48, 83,
      5, 94, 26, 70, 12, 51, 82, 99, 45, 22, 64, 10, 78, 13, 18, 15, 39, 8, 30, 68, 65, 40, 21, 6, 86, 90, 29, 60, 4,
      38, 3, 43, 93, 44, 50, 41, 96, 20, 62, 19, 91, 23, 36, 47, 92, 76, 31, 67, 11, 0, 56, 95, 85, 35, 16, 2, 14, 75,
      53, 1, 57, 81, 46, 71, 54, 24, 74, 89, 32, 25, 34,
    ]);
  });

  it('should return boards', () => {
    const result = input.getInput();

    const expectedBoard = [
      [59, 98, 84, 27, 56],
      [17, 35, 18, 64, 34],
      [62, 16, 74, 26, 55],
      [21, 99, 1, 19, 93],
      [65, 68, 53, 24, 73],
    ];
    expect(result.boards[0]).toStrictEqual(expectedBoard);
  });
});
