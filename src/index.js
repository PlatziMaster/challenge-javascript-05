/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let lastLine = [];
  let penultimateLine;

  for (let n = 0; n <= lineNumber; n++) {
    penultimateLine = [1];
    for (let k = 0; k <= lastLine.length; k++) {
      if (lastLine[k + 1] > 0) {
        penultimateLine.push(lastLine[k] + lastLine[k + 1]);
      }
    }
    if (n > 0) penultimateLine.push(1);
    lastLine = penultimateLine;
  }
  return lastLine;
};

module.exports = pascalTriangle;