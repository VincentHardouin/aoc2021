const partOne = require('./part-one');

describe('day5 | part-one', () => {
  describe('Point', () => {
    describe('#getAllPointsBetween', () => {
      it('should return all points between when y are different', () => {
        const result = partOne.Point.getAllPointsBetween({ x1: 1, y1: 1, x2: 1, y2: 3 });

        expect(result.length).toBe(3);
        expect(result[0].x).toBe(1);
        expect(result[0].y).toBe(1);
        expect(result[1].x).toBe(1);
        expect(result[1].y).toBe(2);
        expect(result[2].x).toBe(1);
        expect(result[2].y).toBe(3);
      });

      it('should return all points between when x are different', () => {
        const result = partOne.Point.getAllPointsBetween({ x1: 9, y1: 7, x2: 7, y2: 7 });

        expect(result.length).toBe(3);
        expect(result[0].x).toBe(9);
        expect(result[0].y).toBe(7);
        expect(result[1].x).toBe(8);
        expect(result[1].y).toBe(7);
        expect(result[2].x).toBe(7);
        expect(result[2].y).toBe(7);
      });
    });
  });

  describe('#getResult', () => {
    it('should ', () => {
      const input = [
        { x1: 0, y1: 9, x2: 5, y2: 9 },
        { x1: 8, y1: 0, x2: 0, y2: 8 },
        { x1: 9, y1: 4, x2: 3, y2: 4 },
        { x1: 2, y1: 2, x2: 2, y2: 1 },
        { x1: 7, y1: 0, x2: 7, y2: 4 },
        { x1: 6, y1: 4, x2: 2, y2: 0 },
        { x1: 0, y1: 9, x2: 2, y2: 9 },
        { x1: 3, y1: 4, x2: 1, y2: 4 },
        { x1: 0, y1: 0, x2: 8, y2: 8 },
        { x1: 5, y1: 5, x2: 8, y2: 2 },
      ];

      const result = partOne.getResult(input);

      expect(result).toBe(5);
    });
  });
});
