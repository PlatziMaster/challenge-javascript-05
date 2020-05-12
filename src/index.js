/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let coefficients = [];
  for (let x = 0; x <= lineNumber; x++) {
    coefficients[x] = factorialize(lineNumber) / (factorialize(x) * factorialize(lineNumber - x));
  }
  return coefficients;
}

const factorialize = (number) => {
  if (number === 0) return 1;
  return (number * factorialize(number - 1));
}

module.exports = pascalTriangle;