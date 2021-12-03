const partOne = require('./part-one');

describe('day3 | part-one', () => {
  describe('#getBitAt', () => {
    it('should return the bit from specified position', () => {
      const value = 0b101011100101;

      const result = partOne.getBitAt(value, 11);

      expect(result).toBe(0b1);
    });
  });

  describe('#getMostCommonBitAt', () => {
    it('should return the most common bit at specify position', () => {
      const values = [
        0b00100, 0b11110, 0b10110, 0b10111, 0b10101, 0b01111, 0b00111, 0b11100, 0b10000, 0b11001, 0b00010, 0b01010,
      ];

      const result = partOne.getMostCommonBitAt(values, 4);

      expect(result).toBe(0b1);
    });
  });

  describe('#getGammaRate', () => {
    it('should return the gammaRate', () => {
      const values = [
        0b00100, 0b11110, 0b10110, 0b10111, 0b10101, 0b01111, 0b00111, 0b11100, 0b10000, 0b11001, 0b00010, 0b01010,
      ];

      const result = partOne.getGammaRate(values);

      expect(parseInt(result, 2)).toBe(22);
    });
  });

  describe('#getEpsilonRate', () => {
    it('should return invert of gamma rate', () => {
      const result = partOne.getEpsilonRate('10110');

      expect(parseInt(result, 2)).toBe(0b01001);
    });
  });
});
