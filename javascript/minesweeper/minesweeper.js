//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const BOMB = "*";

export const annotate = (input) => {
  let numRows = input.length; // number of rows
  let numRowEntries = input[0] ? input[0].length : 0; // number of row entries
  let processedInput = input.map((row) => row.split(""));
  let checkedInput = [];

  let check = (i, j) => {
    if (
      i >= 0 &&
      j >= 0 &&
      i < numRows &&
      j < numRowEntries &&
      processedInput[i][j] === BOMB
    ) {
      return 1;
    } else {
      return 0;
    }
  };
  for (let i = 0; i < numRows; i++) {
    let checkedRow = "";
    for (let j = 0; j < numRowEntries; j++) {
      if (processedInput[i][j] === " ") {
        let checkedEntry =
          check(i - 1, j - 1) +
          check(i - 1, j) +
          check(i - 1, j + 1) + // check neighbours on previous row
          check(i, j - 1) +
          check(i, j + 1) + // check neighbours on current row
          check(i + 1, j - 1) +
          check(i + 1, j) +
          check(i + 1, j + 1); // check neighbours on next row
        checkedRow += checkedEntry > 0 ? checkedEntry : " ";
      } else {
        checkedRow += processedInput[i][j];
      }
    }
    checkedInput.push(checkedRow);
  }
  return checkedInput;
};
