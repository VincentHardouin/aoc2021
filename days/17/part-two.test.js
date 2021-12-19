const partTwo = require('./part-two');

describe('day17 | part-two', () => {
  describe('#getResult', () => {
    it('should ', () => {
      const input = {
        minX: 20,
        maxX: 30,
        minY: -10,
        maxY: -5,
      };

      const result = partTwo.getResult(input);

      expect(result).toBe(112);
    });
  });
});
