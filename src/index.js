/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (row) => {
  const numbers = [];

  for (let column = 0; column < row + 1; column++) {
    if (column === 0 || column === row) {
      numbers[column] = 1;
    } else {
      numbers[column] = (numbers[column - 1] * (row + 1 - column)) / column;
    }
  }

  return numbers;
};

module.exports = pascalTriangle;
