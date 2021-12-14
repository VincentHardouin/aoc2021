const input = require('./input');

describe('day14 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result.polymer).toBe('PHVCVBFHCVPFKBNHKNBO');
    expect(result.rules.get('HK')).toBe('F');
  });
});
