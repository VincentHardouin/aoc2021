const partOne = require('./part-one');
const { Digit } = require('./part-one');

describe('day08 | part-one', () => {
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
  });

  describe('#getResult', () => {
    it('should the count of easy digit', () => {
      const input = [
        {
          uniqSignalPattern: 'be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb',
          fourDigitOutput: ['fdgacbe', 'cefdb', 'cefbgd', 'gcbe'],
        },
        {
          uniqSignalPattern: 'edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec',
          fourDigitOutput: ['fcgedb', 'cgb', 'dgebacf', 'gc'],
        },
        {
          uniqSignalPattern: 'fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef',
          fourDigitOutput: ['cg', 'cg', 'fdcagb', 'cbg'],
        },
        {
          uniqSignalPattern: 'fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega',
          fourDigitOutput: ['efabcd', 'cedba', 'gadfec', 'cb'],
        },
        {
          uniqSignalPattern: 'aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga',
          fourDigitOutput: ['gecf', 'egdcabf', 'bgf', 'bfgea'],
        },
        {
          uniqSignalPattern: 'fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf',
          fourDigitOutput: ['gebdcfa', 'ecba', 'ca', 'fadegcb'],
        },
        {
          uniqSignalPattern: 'dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf',
          fourDigitOutput: ['cefg', 'dcbef', 'fcge', 'gbcadfe'],
        },
        {
          uniqSignalPattern: 'bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd',
          fourDigitOutput: ['ed', 'bcgafe', 'cdgba', 'cbgef'],
        },
        {
          uniqSignalPattern: 'egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg',
          fourDigitOutput: ['gbdfcae', 'bgc', 'cg', 'cgb'],
        },
        {
          uniqSignalPattern: 'gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc',
          fourDigitOutput: ['fgae', 'cfgab', 'fg', 'bagce'],
        },
      ];

      const result = partOne.getResult(input);

      expect(result).toBe(26);
    });
  });
});
