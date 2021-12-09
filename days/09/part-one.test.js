const partOne = require('./part-one');

describe('day09 | part-one', () => {
  describe('#getResult', () => {
    it('should ', () => {
      const input = [
        [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
        [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
        [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
        [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
        [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
      ];

      const result = partOne.getResult(input);

      expect(result).toBe(15);
    });
  });
});
