const partOne = require('./part-one');
const { getAllPossibleX } = require('./part-one');

describe('day17 | part-one', () => {
  describe('Trajectory', () => {
    describe('#nextStep', () => {
      it('should add all steps', () => {
        const trajectory = new partOne.Trajectory(7, 2);

        trajectory.nextStep();
        trajectory.nextStep();
        trajectory.nextStep();
        trajectory.nextStep();
        trajectory.nextStep();
        trajectory.nextStep();
        trajectory.nextStep();

        expect(trajectory.steps).toStrictEqual([
          { x: 7, y: 2 },
          { x: 13, y: 3 },
          { x: 18, y: 3 },
          { x: 22, y: 2 },
          { x: 25, y: 0 },
          { x: 27, y: -3 },
          { x: 28, y: -7 },
        ]);
      });
    });
  });

  describe('#getResult', () => {
    it('should return the maximum y reach', () => {
      const input = {
        minX: 20,
        maxX: 30,
        minY: -10,
        maxY: -5,
      };

      const result = partOne.getResult(input);

      expect(result).toBe(45);
    });
  });
});
