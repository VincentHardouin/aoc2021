const input = require('./input');

describe('day21 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result[0]).toStrictEqual({ name: 'Player 1', position: 4 });
  });
});
