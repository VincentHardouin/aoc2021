const partTwo = require('./part-two');
const { Position } = require('./part-two');

describe('day2 | part-two', () => {
  describe('Position', () => {
    let position;
    beforeEach(() => {
      position = new Position();
    });

    describe('#addForward', () => {
      it('should increase x', () => {
        position.addForward(5);

        expect(position.x).toBe(5);
        expect(position.y).toBe(0);
      });

      it('should increase x and y due to aim', () => {
        position.addForward(5);
        position.addDown(5);

        position.addForward(8);

        expect(position.x).toBe(13);
        expect(position.y).toBe(40);
      });

      it('should increase x and y due to aim', () => {
        position.addForward(5);
        position.addDown(5);
        position.addForward(8);
        position.addUp(3);
        position.addDown(8);

        position.addForward(2);

        expect(position.x).toBe(15);
        expect(position.y).toBe(60);
      });
    });

    describe('#addDown', () => {
      it('should increase aim', () => {
        position.addDown(5);

        expect(position.x).toBe(0);
        expect(position.y).toBe(0);
        expect(position.aim).toBe(5);
      });
    });

    describe('#addUp', () => {
      it('should decrease y', () => {
        position.addUp(5);

        expect(position.x).toBe(0);
        expect(position.y).toBe(0);
        expect(position.aim).toBe(-5);
      });
    });

    describe('#addInstruction', () => {
      [
        { instruction: 'forward', units: 5, expectedX: 5, expectedY: 0 },
        { instruction: 'up', units: 5, expectedX: 0, expectedY: 0, expectedAim: -5 },
        { instruction: 'down', units: 5, expectedX: 0, expectedY: 0, expectedAim: 5 },
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

      const result = partTwo.getFinalPosition(instructions);

      expect(result.x).toBe(15);
      expect(result.y).toBe(60);
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

      const result = partTwo.getResult(instructions);

      expect(result).toBe(900);
    });
  });
});
