const partOne = require('./part-one');

describe('day12 | part-one', () => {
  describe('Segment', () => {
    describe('#getSmallCaves', () => {
      it('should return small cave only if appears twice', () => {
        const segment = new partOne.Segment(['start', 'dc']);

        expect(segment.getSmallCaves()).toStrictEqual(['dc']);
      });
    });
  });

  describe('Path', () => {
    describe('#getSmallCaves', () => {
      it('should return small cave only if appears twice', () => {
        const segments = [
          new partOne.Segment(['start', 'dc']),
          new partOne.Segment(['HK', 'cc']),
          new partOne.Segment(['cc', 'to']),
        ];

        const path = new partOne.Path(segments);

        expect(path.getSmallCaves()).toStrictEqual(['cc']);
      });
    });
  });

  describe('#getResult', () => {
    it('should return the number of path : small exemple', () => {
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

      const result = partOne.getResult(input);

      expect(result).toBe(19);
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

      const result = partOne.getResult(input);

      expect(result).toBe(226);
    });
  });
});
