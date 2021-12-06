const partTwo = require('./part-two');

describe('day6 | part-one', () => {
  describe('Lanternfish', () => {
    describe('#nextDay', () => {
      it('should decrease internal time', () => {
        const lanternfish = new partTwo.Lanternfish(3);

        lanternfish.nextDay();

        expect(lanternfish.timer).toBe(2);
      });

      describe('when time is 0', () => {
        it('should create new lanternfish and set timer to 6', () => {
          const lanternfish = new partTwo.Lanternfish(0);

          const result = lanternfish.nextDay();

          expect(lanternfish.timer).toBe(6);
          expect(result).toBeInstanceOf(partTwo.Lanternfish);
          expect(result.timer).toBe(8);
        });
      });
    });
  });

  describe('#getResult', () => {
    it('should ', () => {
      const input = [3, 4, 3, 1, 2];

      const result = partTwo.getResult(input);

      expect(result).toBe(26984457539);
    });
  });
});
