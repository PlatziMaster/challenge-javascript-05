/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let pascalArray = [];
  for (let i = 0; i <= lineNumber; i++) {
    let iteration = 1;
    for (let j = 0; j <= i; j++) {
      i === lineNumber ? pascalArray.push(iteration) : "";
      iteration = (iteration * (i - j)) / (j + 1);
    }
  }
  return pascalArray;
};

module.exports = pascalTriangle;
