const input = require('./input');

describe('day13 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result.points[0]).toStrictEqual({ x: 982, y: 10 });
    expect(result.folds[0]).toStrictEqual({ direction: 'x', value: 655 });
  });
});
