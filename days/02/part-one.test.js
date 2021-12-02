const partOne = require('./part-one');
const { Position } = require('./part-one');

describe('day2 | part-one', () => {
  describe('Position', () => {
    let position;
    beforeEach(() => {
      position = new Position();
    });

    describe('#addForward', () => {
      it('should decrease x', () => {
        position.addForward(5);

        expect(position.x).toBe(5);
        expect(position.y).toBe(0);
      });
    });

    describe('#addDown', () => {
      it('should increase y', () => {
        position.addDown(5);

        expect(position.x).toBe(0);
        expect(position.y).toBe(5);
      });
    });

    describe('#addUp', () => {
      it('should decrease y', () => {
        position.addUp(5);

        expect(position.x).toBe(0);
        expect(position.y).toBe(-5);
      });
    });

    describe('#addInstruction', () => {
      [
        { instruction: 'forward', units: 5, expectedX: 5, expectedY: 0 },
        { instruction: 'up', units: 5, expectedX: 0, expectedY: -5 },
        { instruction: 'down', units: 5, expectedX: 0, expectedY: 5 },
      ].forEach((testCase) => {
        it(`should be return x = ${testCase.expectedX} and y = ${testCase.expectedY}`, () => {
          const position = new Position();

          position.addInstruction(testCase);

          expect(position.x).toBe(testCase.expectedX);
          expect(position.y).toBe(testCase.expectedY);
        });
      });
    });
  });

  describe('#getFinalPosition', () => {
    it('should return the final position', () => {
      const instructions = [
        { instruction: 'forward', units: 5 },
        { instruction: 'down', units: 5 },
        { instruction: 'forward', units: 8 },
        { instruction: 'up', units: 3 },
        { instruction: 'down', units: 8 },
        { instruction: 'forward', units: 2 },
      ];

      const result = partOne.getFinalPosition(instructions);

      expect(result.x).toBe(15);
      expect(result.y).toBe(10);
    });
  });

  describe('#getResult', () => {
    it('should getFinalPositon and multiplie position and depth', () => {
      const instructions = [
        { instruction: 'forward', units: 5 },
        { instruction: 'down', units: 5 },
        { instruction: 'forward', units: 8 },
        { instruction: 'up', units: 3 },
        { instruction: 'down', units: 8 },
        { instruction: 'forward', units: 2 },
      ];

      const result = partOne.getResult(instructions);

      expect(result).toBe(150);
    });
  });
});
