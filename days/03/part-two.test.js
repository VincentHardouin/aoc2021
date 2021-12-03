const partTwo = require('./part-two');

describe('day3 | part-two', () => {
  describe('#getBitAt', () => {
    it('should return the bit from specified position', () => {
      const value = 0b101011100101;

      const result = partTwo.getBitAt(value, 11);

      expect(result).toBe(0b1);
    });
  });

  describe('#getMostCommonBitAt', () => {
    it('should return the most common bit at specify position', () => {
      const values = [
        '00100',
        '11110',
        '10110',
        '10111',
        '10101',
        '01111',
        '00111',
        '11100',
        '10000',
        '11001',
        '00010',
        '01010',
      ];

      const result = partTwo.getMostCommonBitAt(values, 0);

      expect(result).toBe('1');
    });

    it('should return the most common bit at specify position', () => {
      const values = ['11110', '10110', '10111', '10101', '11100', '10000', '11001'];

      const result = partTwo.getMostCommonBitAt(values, 1);

      expect(result).toBe('0');
    });

    it('should return the most common', () => {
      const values = ['10110', '10111', '10101'];

      const result = partTwo.getMostCommonBitAt(values, 3);

      expect(result).toBe('1');
    });
  });

  describe('#getOxygenGeneratorRating', () => {
    it('should return oxygen generator rating', () => {
      const values = [
        '00100',
        '11110',
        '10110',
        '10111',
        '10101',
        '01111',
        '00111',
        '11100',
        '10000',
        '11001',
        '00010',
        '01010',
      ];

      const result = partTwo.getOxygenGeneratorRating(values);

      expect(result).toBe('10111');
    });
  });

  describe('#getCO2ScrubberRating', () => {
    it('should return oxygen generator rating', () => {
      const values = [
        '00100',
        '11110',
        '10110',
        '10111',
        '10101',
        '01111',
        '00111',
        '11100',
        '10000',
        '11001',
        '00010',
        '01010',
      ];

      const result = partTwo.getCO2ScrubberRating(values);

      expect(result).toBe('01010');
    });
  });

  describe('#getResult', () => {
    it('should return result', () => {
      const values = [
        '00100',
        '11110',
        '10110',
        '10111',
        '10101',
        '01111',
        '00111',
        '11100',
        '10000',
        '11001',
        '00010',
        '01010',
      ];

      const result = partTwo.getResult(values);

      expect(result).toBe(230);
    });
  });
});
