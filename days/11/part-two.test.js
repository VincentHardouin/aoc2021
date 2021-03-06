const partTwo = require('./part-two');
const { DumboOctopus, Octopuses } = require('./part-two');

describe('day11 | part-two', () => {
  describe('DumboOctopus', () => {
    describe('#nextStep', () => {
      it('should increase energy', () => {
        const octopus = new DumboOctopus(6, 1, 1);

        octopus.nextStep();

        expect(octopus.energy).toBe(7);
        expect(octopus.hasFlashedInPreviousRound).toBe(false);
      });

      it('should set energy to 0 and increase flash when energy is greater than 9', () => {
        const octopus = new DumboOctopus(9, 1, 1);

        octopus.nextStep();

        expect(octopus.energy).toBe(0);
        expect(octopus.flash).toBe(1);
        expect(octopus.hasFlashedInPreviousRound).toBe(true);
      });
    });
  });

  describe('Octopuses', () => {
    describe('nextStep', () => {
      it('should call nextStep for all octopus', () => {
        // given
        const input = [
          [1, 1, 1, 1, 1],
          [1, 9, 9, 9, 1],
          [1, 9, 1, 9, 1],
          [1, 9, 9, 9, 1],
          [1, 1, 1, 1, 1],
        ];
        const octopuses = Octopuses.createFromEnergiesGrid(input);

        // when
        octopuses.nextStep();

        // then
        const onlyEnergies = octopuses.grid.map((line) => line.map((octopus) => octopus.energy));
        const expectedEnergies = [
          [3, 4, 5, 4, 3],
          [4, 0, 0, 0, 4],
          [5, 0, 0, 0, 5],
          [4, 0, 0, 0, 4],
          [3, 4, 5, 4, 3],
        ];
        expect(onlyEnergies).toStrictEqual(expectedEnergies);
      });

      it('larger exemple : should call nextStep for all octopus', () => {
        const input = [
          [5, 4, 8, 3, 1, 4, 3, 2, 2, 3],
          [2, 7, 4, 5, 8, 5, 4, 7, 1, 1],
          [5, 2, 6, 4, 5, 5, 6, 1, 7, 3],
          [6, 1, 4, 1, 3, 3, 6, 1, 4, 6],
          [6, 3, 5, 7, 3, 8, 5, 4, 7, 8],
          [4, 1, 6, 7, 5, 2, 4, 6, 4, 5],
          [2, 1, 7, 6, 8, 4, 1, 7, 2, 1],
          [6, 8, 8, 2, 8, 8, 1, 1, 3, 4],
          [4, 8, 4, 6, 8, 4, 8, 5, 5, 4],
          [5, 2, 8, 3, 7, 5, 1, 5, 2, 6],
        ];

        const octopuses = Octopuses.createFromEnergiesGrid(input);

        // when
        octopuses.nextStep();
        const onlyEnergies = octopuses.grid.map((line) => line.map((octopus) => octopus.energy));
        const expectedEnergiesForStep1 = [
          [6, 5, 9, 4, 2, 5, 4, 3, 3, 4],
          [3, 8, 5, 6, 9, 6, 5, 8, 2, 2],
          [6, 3, 7, 5, 6, 6, 7, 2, 8, 4],
          [7, 2, 5, 2, 4, 4, 7, 2, 5, 7],
          [7, 4, 6, 8, 4, 9, 6, 5, 8, 9],
          [5, 2, 7, 8, 6, 3, 5, 7, 5, 6],
          [3, 2, 8, 7, 9, 5, 2, 8, 3, 2],
          [7, 9, 9, 3, 9, 9, 2, 2, 4, 5],
          [5, 9, 5, 7, 9, 5, 9, 6, 6, 5],
          [6, 3, 9, 4, 8, 6, 2, 6, 3, 7],
        ];
        expect(onlyEnergies).toStrictEqual(expectedEnergiesForStep1);

        octopuses.nextStep();

        // then
        const onlyEnergies2 = octopuses.grid.map((line) => line.map((octopus) => octopus.energy));
        const expectedEnergiesForStep2 = [
          [8, 8, 0, 7, 4, 7, 6, 5, 5, 5],
          [5, 0, 8, 9, 0, 8, 7, 0, 5, 4],
          [8, 5, 9, 7, 8, 8, 9, 6, 0, 8],
          [8, 4, 8, 5, 7, 6, 9, 6, 0, 0],
          [8, 7, 0, 0, 9, 0, 8, 8, 0, 0],
          [6, 6, 0, 0, 0, 8, 8, 9, 8, 9],
          [6, 8, 0, 0, 0, 0, 5, 9, 4, 3],
          [0, 0, 0, 0, 0, 0, 7, 4, 5, 6],
          [9, 0, 0, 0, 0, 0, 0, 8, 7, 6],
          [8, 7, 0, 0, 0, 0, 6, 8, 4, 8],
        ];
        expect(onlyEnergies2).toStrictEqual(expectedEnergiesForStep2);
      });
    });
  });

  describe('#getResult', () => {
    it('should ', () => {
      const input = [
        [5, 4, 8, 3, 1, 4, 3, 2, 2, 3],
        [2, 7, 4, 5, 8, 5, 4, 7, 1, 1],
        [5, 2, 6, 4, 5, 5, 6, 1, 7, 3],
        [6, 1, 4, 1, 3, 3, 6, 1, 4, 6],
        [6, 3, 5, 7, 3, 8, 5, 4, 7, 8],
        [4, 1, 6, 7, 5, 2, 4, 6, 4, 5],
        [2, 1, 7, 6, 8, 4, 1, 7, 2, 1],
        [6, 8, 8, 2, 8, 8, 1, 1, 3, 4],
        [4, 8, 4, 6, 8, 4, 8, 5, 5, 4],
        [5, 2, 8, 3, 7, 5, 1, 5, 2, 6],
      ];

      const result = partTwo.getResult(input);

      expect(result).toBe(195);
    });
  });
});
