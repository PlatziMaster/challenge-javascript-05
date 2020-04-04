/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  const pascal = [];

  for (let k = 0; k < lineNumber + 1; k++) {
    if (k === 0 || k === lineNumber) {
      pascal[k] = 1;
    } else {
      pascal[k] = (pascal[k - 1] * (lineNumber + 1 - k)) / k;
    }
  }

  return pascal;
};

module.exports = pascalTriangle;
