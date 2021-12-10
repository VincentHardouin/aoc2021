const partOne = require('./part-one');

describe('day10 | part-one', () => {
  describe('Line', () => {
    describe('#isCorrupted', () => {
      it('should return true when line is corrupted', () => {
        const line = new partOne.Line('{([(<{}[<>[]}>{[]{[(<()>');

        expect(line.isCorrupted()).toBe(true);
      });

      it('should return false when line is not corrupted', () => {
        const line = new partOne.Line('{([(<{}[<>[]]>{[]{[(<()>');

        expect(line.isCorrupted()).toBe(false);
      });
    });

    describe('#getFirstIllegalCharacter', () => {
      [
        { line: '{([(<{}[<>[]}>{[]{[(<()>', illegalCharacter: '}' },
        { line: '[[<[([]))<([[{}[[()]]]', illegalCharacter: ')' },
        { line: '[{[{({}]{}}([{[{{{}}([]', illegalCharacter: ']' },
        { line: '[<(<(<(<{}))><([]([]()', illegalCharacter: ')' },
        { line: '<{([([[(<>()){}]>(<<{{', illegalCharacter: '>' },
      ].forEach((testCase) => {
        it(`should return ${testCase.illegalCharacter}`, () => {
          const line = new partOne.Line(testCase.line);

          expect(line.getFirstIllegalCharacter()).toBe(testCase.illegalCharacter);
        });
      });
    });
  });

  describe('#getResult', () => {
    it('should ', () => {
      const input = [
        '[({(<(())[]>[[{[]{<()<>>',
        '[(()[<>])]({[<{<<[]>>(',
        '{([(<{}[<>[]}>{[]{[(<()>',
        '(((({<>}<{<{<>}{[]{[]{}',
        '[[<[([]))<([[{}[[()]]]',
        '[{[{({}]{}}([{[{{{}}([]',
        '{<[[]]>}<{[{[{[]{()[[[]',
        '[<(<(<(<{}))><([]([]()',
        '<{([([[(<>()){}]>(<<{{',
        '<{([{{}}[<[[[<>{}]]]>[]]',
      ];

      const result = partOne.getResult(input);

      expect(result).toBe(26397);
    });
  });
});
