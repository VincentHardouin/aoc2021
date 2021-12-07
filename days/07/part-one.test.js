const partOne = require('./part-one');

describe('day07 | part-one', () => {
  describe('#getResult', () => {
    it('should ', () => {
      const input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

      const result = partOne.getResult(input);

      expect(result).toBe(37);
    });
  });
});
