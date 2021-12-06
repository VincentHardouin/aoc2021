const partOne = require('./part-one');

describe('day6 | part-one', () => {
  describe('Lanternfish', () => {
    describe('#nextDay', () => {
      it('should decrease internal time', () => {
        const lanternfish = new partOne.Lanternfish(3);

        lanternfish.nextDay();

        expect(lanternfish.timer).toBe(2);
      });

      describe('when time is 0', () => {
        it('should create new lanternfish and set timer to 6', () => {
          const lanternfish = new partOne.Lanternfish(0);

          const result = lanternfish.nextDay();

          expect(lanternfish.timer).toBe(6);
          expect(result).toBeInstanceOf(partOne.Lanternfish);
          expect(result.timer).toBe(8);
        });
      });
    });
  });

  describe('#getResult', () => {
    it('should ', () => {
      const input = [3, 4, 3, 1, 2];

      const result = partOne.getResult(input);

      expect(result).toBe(5934);
    });
  });
});
