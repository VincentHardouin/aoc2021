const partTwo = require('./part-two');
const { Measure } = require('./part-two');

describe('day1 | part-two', () => {
  describe('Measure', () => {
    describe('#getSum', () => {
      it('should return the sum', () => {
        const measure = new Measure([2, 1, 12]);

        expect(measure.getSum()).toBe(15);
      });
    });

    describe('#isIncrease', () => {
      it('should return true', () => {
        const measure = new Measure([2, 1]);
        const measure2 = new Measure([4, 2]);

        expect(measure2.isIncrease(measure)).toBe(true);
      });

      it('should return false', () => {
        const measure = new Measure([2, 1]);
        const measure2 = new Measure([4, 2]);

        expect(measure.isIncrease(measure2)).toBe(false);
      });
    });
  });

  describe('#getMeasures', () => {
    it('should create Measure by batch with array', () => {
      const values = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

      const result = partTwo.getMeasures(values);

      expect(result.length).toBe(8);
      expect(result[0].depths).toStrictEqual([199, 200, 208]);
      expect(result[1].depths).toStrictEqual([200, 208, 210]);
      expect(result[7].depths).toStrictEqual([269, 260, 263]);
    });
  });

  describe('#getResult', () => {
    it('should return the number of increase from an array', () => {
      const values = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

      const result = partTwo.getResult(values);

      expect(result).toBe(5);
    });
  });
});
