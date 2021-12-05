const partTwo = require('./part-two');

describe('day5 | part-two', () => {
  describe('Point', () => {
    describe('#getAllPointsBetween', () => {
      describe("when the x's are the same : horizontal line", () => {
        it('should return all points between', () => {
          const result = partTwo.Point.getAllPointsBetween({ x1: 1, y1: 1, x2: 1, y2: 3 });

          expect(result.length).toBe(3);
          expect(result[0].x).toBe(1);
          expect(result[0].y).toBe(1);
          expect(result[1].x).toBe(1);
          expect(result[1].y).toBe(2);
          expect(result[2].x).toBe(1);
          expect(result[2].y).toBe(3);
        });
      });

      describe("when the y's are the same = vertical line", () => {
        it('should return all points between ', () => {
          const result = partTwo.Point.getAllPointsBetween({ x1: 9, y1: 7, x2: 7, y2: 7 });

          expect(result.length).toBe(3);
          expect(result[0].x).toBe(9);
          expect(result[0].y).toBe(7);
          expect(result[1].x).toBe(8);
          expect(result[1].y).toBe(7);
          expect(result[2].x).toBe(7);
          expect(result[2].y).toBe(7);
        });
      });

      describe("when the x's and the y's are different = diagonal line", () => {
        it('should return all points between 1,1-> 3,3', () => {
          const result = partTwo.Point.getAllPointsBetween({ x1: 1, y1: 1, x2: 3, y2: 3 });

          expect(result.length).toBe(3);
          expect(result[0].x).toBe(1);
          expect(result[0].y).toBe(1);
          expect(result[1].x).toBe(2);
          expect(result[1].y).toBe(2);
          expect(result[2].x).toBe(3);
          expect(result[2].y).toBe(3);
        });

        it('should return all points between 9,7 -> 7,9', () => {
          const result = partTwo.Point.getAllPointsBetween({ x1: 9, y1: 7, x2: 7, y2: 9 });

          expect(result.length).toBe(3);
          expect(result[0].x).toBe(9);
          expect(result[0].y).toBe(7);
          expect(result[1].x).toBe(8);
          expect(result[1].y).toBe(8);
          expect(result[2].x).toBe(7);
          expect(result[2].y).toBe(9);
        });
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

      const result = partTwo.getResult(input);

      expect(result).toBe(12);
    });
  });
});
