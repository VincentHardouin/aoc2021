const partTwo = require('./part-two');

describe('day12 | part-two', () => {
  describe('Segment', () => {
    describe('#getSmallCaves', () => {
      it('should return small cave only if appears twice', () => {
        const segment = new partTwo.Segment(['start', 'dc']);

        expect(segment.getSmallCaves()).toStrictEqual(['dc']);
      });
    });
  });

  describe('Path', () => {
    describe('#getLastCave', () => {
      describe('when they are one segment', () => {
        it('should not return start segment', () => {
          const segments = [new partTwo.Segment(['start', 'dc'])];
          const path = new partTwo.Path(segments);

          const result = path.getLastCave();

          expect(result).toBe('dc');
        });
      });

      describe('when they are some segments', () => {
        it('should return last segment', () => {
          const segments = [
            new partTwo.Segment(['start', 'A']),
            new partTwo.Segment(['A', 'b']),
            new partTwo.Segment(['b', 'A']),
            new partTwo.Segment(['A', 'c']),
            new partTwo.Segment(['A', 'c']),
          ];
          const path = new partTwo.Path(segments);

          const result = path.getLastCave();

          expect(result).toBe('A');
        });
      });
    });

    describe('#getSmallCaves', () => {
      it('should return all small cave only if one appears fourth', () => {
        const segments = [
          new partTwo.Segment(['start', 'A']),
          new partTwo.Segment(['A', 'b']),
          new partTwo.Segment(['b', 'A']),
          new partTwo.Segment(['A', 'c']),
          new partTwo.Segment(['c', 'A']),
          new partTwo.Segment(['c', 'A']),
          new partTwo.Segment(['c', 'A']),
        ];
        const path = new partTwo.Path(segments);

        const result = path.getSmallCaves();

        expect(result).toStrictEqual(['b', 'c']);
      });

      it('should not return small cave when any appears fourth', () => {
        const segments = [
          new partTwo.Segment(['start', 'A']),
          new partTwo.Segment(['A', 'b']),
          new partTwo.Segment(['b', 'A']),
          new partTwo.Segment(['A', 'c']),
          new partTwo.Segment(['c', 'A']),
        ];
        const path = new partTwo.Path(segments);

        const result = path.getSmallCaves();

        expect(result).toStrictEqual([]);
      });
    });
  });

  describe('#getResult', () => {
    it('should return the number of path : small exemple', () => {
      const input = [
        ['start', 'A'],
        ['start', 'b'],
        ['A', 'c'],
        ['A', 'b'],
        ['b', 'd'],
        ['A', 'end'],
        ['b', 'end'],
      ];

      const result = partTwo.getResult(input);

      expect(result).toBe(36);
    });

    it('should return the number of path : small exemple2', () => {
      const input = [
        ['dc', 'end'],
        ['HN', 'start'],
        ['start', 'kj'],
        ['dc', 'start'],
        ['dc', 'HN'],
        ['LN', 'dc'],
        ['HN', 'end'],
        ['kj', 'sa'],
        ['kj', 'HN'],
        ['kj', 'dc'],
      ];

      const result = partTwo.getResult(input);

      expect(result).toBe(103);
    });

    it('should return the number of path', () => {
      const input = [
        ['fs', 'end'],
        ['he', 'DX'],
        ['fs', 'he'],
        ['start', 'DX'],
        ['pj', 'DX'],
        ['end', 'zg'],
        ['zg', 'sl'],
        ['zg', 'pj'],
        ['pj', 'he'],
        ['RW', 'he'],
        ['fs', 'DX'],
        ['pj', 'RW'],
        ['zg', 'RW'],
        ['start', 'pj'],
        ['he', 'WI'],
        ['zg', 'he'],
        ['pj', 'fs'],
        ['start', 'RW'],
      ];

      const result = partTwo.getResult(input);

      expect(result).toBe(3509);
    });
  });
});
