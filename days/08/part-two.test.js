const partTwo = require('./part-two');
const { Digit } = require('./part-two');

describe('day08 | part-two', () => {
  describe('Digit', () => {
    describe('#isEasyDigit', () => {
      [
        { digit: 'gc', result: true },
        { digit: 'fdgacbe', result: true },
        { digit: 'gcbe', result: true },
        { digit: 'bgc', result: true },
        { digit: 'cefdb', result: false },
        { digit: 'cefbgd', result: false },
      ].forEach((testCase) => {
        it(`should return ${testCase.result} for digit: ${testCase.digit}`, () => {
          const result = new Digit(testCase.digit).isEasyDigit();

          expect(result).toBe(testCase.result);
        });
      });
    });

    describe('#getCommonPart', () => {
      it('should return common part', () => {
        const digit = new Digit('dab');
        const result = digit.getCommonPart(new Digit('ab'));

        expect(result).toStrictEqual(['a', 'b']);
      });
    });

    describe('#getDifference', () => {
      it('should return common part', () => {
        const digit = new Digit('dab');
        const result = digit.getDifference(new Digit('ab'));

        expect(result).toStrictEqual(['d']);
      });
    });
  });

  describe('Segment', () => {
    describe('#get', () => {
      it('should return segments for digit', () => {
        const sevenSegment = new partTwo.SevenSegments({ a: 'd', b: 'e', c: 'a', d: 'f', e: 'g', f: 'b', g: 'c' });

        expect(sevenSegment.get(0).sort()).toStrictEqual(['c', 'a', 'g', 'e', 'd', 'b'].sort());
        expect(sevenSegment.get(1).sort()).toStrictEqual(['a', 'b'].sort());
        expect(sevenSegment.get(2).sort()).toStrictEqual(['g', 'c', 'd', 'f', 'a'].sort());
        expect(sevenSegment.get(3).sort()).toStrictEqual(['f', 'b', 'c', 'a', 'd'].sort());
        expect(sevenSegment.get(4).sort()).toStrictEqual(['e', 'a', 'f', 'b'].sort());
        expect(sevenSegment.get(5).sort()).toStrictEqual(['c', 'd', 'f', 'b', 'e'].sort());
        expect(sevenSegment.get(6).sort()).toStrictEqual(['c', 'd', 'f', 'g', 'e', 'b'].sort());
        expect(sevenSegment.get(7).sort()).toStrictEqual(['d', 'a', 'b'].sort());
        expect(sevenSegment.get(8).sort()).toStrictEqual(['a', 'c', 'e', 'd', 'g', 'f', 'b'].sort());
        expect(sevenSegment.get(9).sort()).toStrictEqual(['c', 'e', 'f', 'a', 'b', 'd'].sort());
      });
    });

    describe('#getByDigit', () => {
      it('should return the digit', () => {
        const sevenSegment = new partTwo.SevenSegments({ a: 'd', b: 'e', c: 'a', d: 'f', e: 'g', f: 'b', g: 'c' });

        const result = sevenSegment.getByDigit(new Digit('cdfbe'));

        expect(result).toStrictEqual(5);
      });
    });

    describe('createSegmentFromSignalPattern', () => {
      it('should return SevenSegment', () => {
        const signalPattern = ['acedgfb', 'cdfbe', 'gcdfa', 'fbcad', 'dab', 'cefabd', 'cdfgeb', 'eafb', 'cagedb', 'ab'];

        const result = partTwo.SevenSegments.createSegmentFromSignalPattern(signalPattern);

        expect(result.get(0).sort()).toStrictEqual(['c', 'a', 'g', 'e', 'd', 'b'].sort());
      });
    });
  });

  describe('#getResult', () => {
    it('should the count of easy digit', () => {
      const input = [
        {
          uniqSignalPattern: ['be', 'cfbegad', 'cbdgef', 'fgaecd', 'cgeb', 'fdcge', 'agebfd', 'fecdb', 'fabcd', 'edb'],
          fourDigitOutput: ['fdgacbe', 'cefdb', 'cefbgd', 'gcbe'],
        },
        {
          uniqSignalPattern: ['edbfga', 'begcd', 'cbg', 'gc', 'gcadebf', 'fbgde', 'acbgfd', 'abcde', 'gfcbed', 'gfec'],
          fourDigitOutput: ['fcgedb', 'cgb', 'dgebacf', 'gc'],
        },
        {
          uniqSignalPattern: ['fgaebd', 'cg', 'bdaec', 'gdafb', 'agbcfd', 'gdcbef', 'bgcad', 'gfac', 'gcb', 'cdgabef'],
          fourDigitOutput: ['cg', 'cg', 'fdcagb', 'cbg'],
        },
        {
          uniqSignalPattern: ['fbegcd', 'cbd', 'adcefb', 'dageb', 'afcb', 'bc', 'aefdc', 'ecdab', 'fgdeca', 'fcdbega'],
          fourDigitOutput: ['efabcd', 'cedba', 'gadfec', 'cb'],
        },
        {
          uniqSignalPattern: ['aecbfdg', 'fbg', 'gf', 'bafeg', 'dbefa', 'fcge', 'gcbea', 'fcaegb', 'dgceab', 'fcbdga'],
          fourDigitOutput: ['gecf', 'egdcabf', 'bgf', 'bfgea'],
        },
        {
          uniqSignalPattern: ['fgeab', 'ca', 'afcebg', 'bdacfeg', 'cfaedg', 'gcfdb', 'baec', 'bfadeg', 'bafgc', 'acf'],
          fourDigitOutput: ['gebdcfa', 'ecba', 'ca', 'fadegcb'],
        },
        {
          uniqSignalPattern: ['dbcfg', 'fgd', 'bdegcaf', 'fgec', 'aegbdf', 'ecdfab', 'fbedc', 'dacgb', 'gdcebf', 'gf'],
          fourDigitOutput: ['cefg', 'dcbef', 'fcge', 'gbcadfe'],
        },
        {
          uniqSignalPattern: ['bdfegc', 'cbegaf', 'gecbf', 'dfcage', 'bdacg', 'ed', 'bedf', 'ced', 'adcbefg', 'gebcd'],
          fourDigitOutput: ['ed', 'bcgafe', 'cdgba', 'cbgef'],
        },
        {
          uniqSignalPattern: ['egadfb', 'cdbfeg', 'cegd', 'fecab', 'cgb', 'gbdefca', 'cg', 'fgcdab', 'egfdb', 'bfceg'],
          fourDigitOutput: ['gbdfcae', 'bgc', 'cg', 'cgb'],
        },
        {
          uniqSignalPattern: ['gcafb', 'gcf', 'dcaebfg', 'ecagb', 'gf', 'abcdeg', 'gaef', 'cafbge', 'fdbac', 'fegbdc'],
          fourDigitOutput: ['fgae', 'cfgab', 'fg', 'bagce'],
        },
      ];

      const result = partTwo.getResult(input);

      expect(result).toBe(61229);
    });
  });
});
