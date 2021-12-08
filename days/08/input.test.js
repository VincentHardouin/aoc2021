const input = require('./input');

describe('day08 | input', () => {
  it('should return array of int for each line', () => {
    const result = input.getInput();

    expect(result[0]).toStrictEqual({
      uniqSignalPattern: ['fcdeba', 'edcbag', 'decab', 'adcefg', 'acdfb', 'gdcfb', 'acf', 'fabe', 'fa', 'eacfgbd'],
      fourDigitOutput: ['aefb', 'cfa', 'acf', 'cdabf'],
    });
  });
});
