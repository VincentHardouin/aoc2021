const partTwo = require('./part-two');

describe('day13 | part-two', () => {
  describe('Point', () => {
    describe('#distance', () => {
      it('should return distance with the point pass in parameters', () => {
        const point = new partTwo.Point({ x: 3, y: 0 });

        const result = point.distance(0, 0);

        expect(result).toBe(3);
      });
    });
  });
});
