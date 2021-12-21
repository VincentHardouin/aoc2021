const partOne = require('./part-one');

describe('day21 | part-one', () => {
  describe('#getResult', () => {
    it('should ', () => {
      const input = [
        { name: 'Player 1', position: 4 },
        { name: 'Player 2', position: 8 },
      ];

      const result = partOne.getResult(input);

      expect(result).toBe(739785);
    });
  });
});
