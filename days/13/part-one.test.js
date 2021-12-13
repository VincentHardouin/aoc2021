const partOne = require('./part-one');

describe('day13 | part-one', () => {
  describe('Point', () => {
    describe('#distance', () => {
      it('should return distance with the point pass in parameters', () => {
        const point = new partOne.Point({ x: 3, y: 0 });

        const result = point.distance(0, 0);

        expect(result).toBe(3);
      });
    });
  });

  describe('Paper', () => {});

  describe('#getResult', () => {
    it('should return the number of point after folding', () => {
      const input = {
        points: [
          { x: 6, y: 10 },
          { x: 0, y: 14 },
          { x: 9, y: 10 },
          { x: 0, y: 3 },
          { x: 10, y: 4 },
          { x: 4, y: 11 },
          { x: 6, y: 0 },
          { x: 6, y: 12 },
          { x: 4, y: 1 },
          { x: 0, y: 13 },
          { x: 10, y: 12 },
          { x: 3, y: 4 },
          { x: 3, y: 0 },
          { x: 8, y: 4 },
          { x: 1, y: 10 },
          { x: 2, y: 14 },
          { x: 8, y: 10 },
          { x: 9, y: 0 },
        ],

        folds: [
          { direction: 'y', value: 7 },
          { direction: 'x', value: 5 },
        ],
      };

      const result = partOne.getResult(input);

      expect(result).toBe(17);
    });
  });
});
