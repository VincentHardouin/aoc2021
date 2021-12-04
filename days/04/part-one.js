const { getInput } = require('./input');

class BoardNumber {
  constructor(number) {
    this.value = number;
    this.isMarked = false;
  }

  mark() {
    this.isMarked = true;
  }
}

class Board {
  constructor(numbers) {
    this.numbers = numbers.map((row) => {
      return row.map((number) => new BoardNumber(number));
    });
  }

  markNumberIfPresent(number) {
    this.numbers.forEach((row) => {
      row.forEach((boardNumber) => {
        if (boardNumber.value === number) {
          boardNumber.mark();
        }
      });
    });
  }

  verifyRows() {
    return !!this.numbers.find(this.verifyRow);
  }

  verifyRow(row) {
    const markedNumbers = row.filter((number) => number.isMarked);
    return markedNumbers.length === row.length;
  }

  verifyColumns() {
    const columns = [];
    for (let i = 0; i < this.numbers.length; i++) {
      const column = this.numbers.map((row) => {
        return row[i];
      });
      columns.push(column);
    }
    return !!columns.find(this.verifyRow);
  }

  verify() {
    return this.verifyRows() || this.verifyColumns();
  }

  getSumOfUnmarkNumbers() {
    return this.numbers.reduce((acc, row) => {
      const rowSum = row.reduce((acc2, number) => {
        return !number.isMarked ? acc2 + number.value : acc2;
      }, 0);
      return acc + rowSum;
    }, 0);
  }
}

class Game {
  constructor(boards) {
    this.boards = boards;
  }

  newRound(number) {
    this.boards.forEach((board) => board.markNumberIfPresent(number));
  }

  haveWinner() {
    return !!this.boards.find((board) => board.verify());
  }

  getWinner() {
    return this.boards.find((board) => board.verify());
  }
}

function getResult(input = getInput()) {
  const boards = input.boards.map((board) => new Board(board));
  const game = new Game(boards);

  let currentNumber;
  for (let i = 0; i < input.drawnNumbers.length; i++) {
    const number = input.drawnNumbers[i];
    game.newRound(number);
    if (game.haveWinner()) {
      currentNumber = number;
      break;
    }
  }

  const winner = game.getWinner();
  return winner.getSumOfUnmarkNumbers() * currentNumber;
}

module.exports = {
  Board,
  getResult,
};
