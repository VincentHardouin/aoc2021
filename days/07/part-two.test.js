const partTwo = require('./part-two');

describe('day07 | part-two', () => {
  describe('#getResult', () => {
    it('should ', () => {
      const input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

      const result = partTwo.getResult(input);

      expect(result).toBe(168);
    });
  });
});
