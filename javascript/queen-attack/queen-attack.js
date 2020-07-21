//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function placeQueen(row, index, queen) {
  return `${row.substr(0, index * 2) + queen + row.substr(index * 2 + 1)}`;
}

export class QueenAttack {
  constructor(positions = { white: [0, 3], black: [7, 3] }) {
    if (
      positions.white.every(
        (element, index) => element === positions.black[index]
      )
    ) {
      throw new Error("Queens cannot share the same space");
    }
    this.white = positions.white;
    this.black = positions.black;
    this.whiteRow = positions.white[0];
    this.blackRow = positions.black[0];
    this.whiteIndex = positions.white[1];
    this.blackIndex = positions.black[1];
  }

  toString() {
    let board = [];
    let row = "_ _ _ _ _ _ _ _";
    // create an empty board
    for (let i = 0; i < 8; i++) {
      if (i === 7) {
        board.push(row.concat("\n"));
      } else {
        board.push(row);
      }
    }
    // place the B and W queens
    board[this.whiteRow] = placeQueen(
      board[this.whiteRow],
      this.whiteIndex,
      "W"
    );
    board[this.blackRow] = placeQueen(
      board[this.blackRow],
      this.blackIndex,
      "B"
    );
    return board.join("\n");
  }

  canAttack() {
    if (
      this.blackRow === this.whiteRow ||
      this.blackIndex === this.whiteIndex ||
      Math.abs(this.blackIndex - this.whiteIndex) ===
        Math.abs(this.blackRow - this.whiteRow)
    ) {
      return true;
    }
    return false;
  }
}
