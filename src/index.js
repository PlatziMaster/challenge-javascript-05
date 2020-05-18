/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let previousArray = [1, 1];
  let currentArray = [1];

  if (lineNumber === 0) {
    return currentArray;
  }

  if (lineNumber === 1) {
    return previousArray;
  }

  for (let y = 2; y <= lineNumber; y++) {
    currentArray = [1];
    for (let x = 1; x < y; x++) {
      currentArray.push(previousArray[x - 1] + previousArray[x]);
    }
    currentArray.push(1);
    previousArray = currentArray;
  }
  return currentArray;
};

module.exports = pascalTriangle;
