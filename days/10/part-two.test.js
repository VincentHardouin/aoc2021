const partTwo = require('./part-two');

describe('day10 | part-two', () => {
  describe('Line', () => {
    describe('#isIncomplete', () => {
      it('should return true when line is not complete', () => {
        const line = new partTwo.Line('[({(<(())[]>[[{[]{<()<>>');

        expect(line.isIncomplete()).toBe(true);
      });
    });

    describe('#isCorrupted', () => {
      it('should return true when line is corrupted', () => {
        const line = new partTwo.Line('{([(<{}[<>[]}>{[]{[(<()>');

        expect(line.isCorrupted()).toBe(true);
      });

      it('should return false when line is not corrupted', () => {
        const line = new partTwo.Line('{([(<{}[<>[]]>{[]{[(<()>');

        expect(line.isCorrupted()).toBe(false);
      });
    });

    describe('#getCompletion', () => {
      [
        { line: '[({(<(())[]>[[{[]{<()<>>', completion: '}}]])})]' },
        { line: '[(()[<>])]({[<{<<[]>>(', completion: ')}>]})' },
        { line: '(((({<>}<{<{<>}{[]{[]{}', completion: '}}>}>))))' },
        { line: '{<[[]]>}<{[{[{[]{()[[[]', completion: ']]}}]}]}>' },
        { line: '<{([{{}}[<[[[<>{}]]]>[]]', completion: '])}>' },
      ].forEach((testCase) => {
        it(`should return completion : ${testCase.completion}`, () => {
          const line = new partTwo.Line(testCase.line);

          expect(line.getCompletion()).toBe(testCase.completion);
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

      const result = partTwo.getResult(input);

      expect(result).toBe(288957);
    });
  });
});
