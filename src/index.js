/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let topRow = [0, 1, 0];
  let bottomRow = [];
  let result;

  if (lineNumber > 0) {
    for (let i = 0; i < lineNumber; i++) {
      for (let j = 0; j < topRow.length - 1; j++) {
        bottomRow[j] = topRow[j] + topRow[j + 1];
      }
      topRow = bottomRow;
      topRow.push(0);
      topRow.unshift(0);
      result = bottomRow;
      bottomRow = [];
    }
    result.pop();
    result.shift();
  } else {
    result = [1];
  }

  return result;
};

module.exports = pascalTriangle;
