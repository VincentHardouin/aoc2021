const partOne = require('./part-one');

describe('day4 | part-one', () => {
  describe('Board', () => {
    let board;

    beforeEach(() => {
      const numbers = [
        [14, 21, 17, 24, 4],
        [10, 16, 15, 9, 19],
        [18, 8, 23, 26, 20],
        [22, 11, 13, 6, 5],
        [2, 0, 12, 3, 7],
      ];
      board = new partOne.Board(numbers);
    });

    describe('#markNumberIfPresent', () => {
      it('should mark number', () => {
        board.markNumberIfPresent(10);

        expect(board.numbers[1][0].isMarked).toBe(true);
        expect(board.numbers[2][1].isMarked).toBe(false);
      });
    });

    describe('#verifyRows', () => {
      it('should return true if one row is complete', () => {
        // given
        board.numbers[2][0].mark();
        board.numbers[2][1].mark();
        board.numbers[2][2].mark();
        board.numbers[2][3].mark();
        board.numbers[2][4].mark();

        // when
        const result = board.verifyRows();

        // then
        expect(result).toBe(true);
      });

      it('should return false when no rows are completed', () => {
        // given
        board.numbers[2][0].mark();
        board.numbers[2][1].mark();
        board.numbers[2][4].mark();

        // when
        const result = board.verifyRows();

        // then
        expect(result).toBe(false);
      });
    });

    describe('#verifyColumns', () => {
      it('should return true if one column is complete', () => {
        // given
        board.numbers[0][2].mark();
        board.numbers[1][2].mark();
        board.numbers[2][2].mark();
        board.numbers[3][2].mark();
        board.numbers[4][2].mark();

        // when
        const result = board.verifyColumns();

        // then
        expect(result).toBe(true);
      });

      it('should return false when no columns are completed', () => {
        // given
        board.numbers[0][2].mark();
        board.numbers[4][2].mark();

        // when
        const result = board.verifyColumns();

        // then
        expect(result).toBe(false);
      });
    });

    describe('#getSumOfUnmarkNumbers', () => {
      it('should return sum of unmarked number', () => {
        board.markNumberIfPresent(7);
        board.markNumberIfPresent(4);
        board.markNumberIfPresent(9);
        board.markNumberIfPresent(5);
        board.markNumberIfPresent(11);
        board.markNumberIfPresent(17);
        board.markNumberIfPresent(23);
        board.markNumberIfPresent(2);
        board.markNumberIfPresent(0);
        board.markNumberIfPresent(14);
        board.markNumberIfPresent(21);
        board.markNumberIfPresent(24);

        const result = board.getSumOfUnmarkNumbers();

        expect(result).toBe(188);
      });
    });
  });

  describe('Game', () => {});

  describe('#getResult', () => {
    it('should ', () => {
      const drawnNumbers = [
        7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1,
      ];
      const boards = [
        [
          [22, 13, 17, 11, 0],
          [8, 2, 23, 4, 24],
          [21, 9, 14, 16, 7],
          [6, 10, 3, 18, 5],
          [1, 12, 20, 15, 19],
        ],
        [
          [3, 15, 0, 2, 22],
          [9, 18, 13, 17, 5],
          [19, 8, 7, 25, 23],
          [20, 11, 10, 24, 4],
          [14, 21, 16, 12, 6],
        ],
        [
          [14, 21, 17, 24, 4],
          [10, 16, 15, 9, 19],
          [18, 8, 23, 26, 20],
          [22, 11, 13, 6, 5],
          [2, 0, 12, 3, 7],
        ],
      ];

      const result = partOne.getResult({ drawnNumbers, boards });

      expect(result).toBe(4512);
    });
  });
});
