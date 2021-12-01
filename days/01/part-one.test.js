const partOne = require('./part-one');
const { Measure } = require('./part-one');

describe('day1 | part-one', () => {
  describe('Measure', () => {
    describe('#isIncrease', () => {
      it('should return false when previousDepth is undefined', () => {
        const measure = new Measure(1);

        expect(measure.isIncrease()).toBe(false);
      });

      it('should return true', () => {
        const measure = new Measure(2, 1);

        expect(measure.isIncrease()).toBe(true);
      });
    });
  });

  describe('#getResult', () => {
    it('should return the number of increase from an array', () => {
      const values = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

      const result = partOne.getResult(values);

      expect(result).toBe(7);
    });
  });
});
