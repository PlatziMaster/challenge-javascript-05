/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
   let pascal = [];

  for (let i = 0; i <= lineNumber; i++) {
    pascal[i] = new Array(i + 1).fill(1);
  }

  for (let i = 2; i <= lineNumber; i++) {
    for (let j = 1; j < pascal[i].length - 1; j++) {
      pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]
    }
  }

  return pascal[lineNumber];
}

module.exports = pascalTriangle;