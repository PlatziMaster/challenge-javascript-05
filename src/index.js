/**
 * @param {number} lineNumber - zero based.
 * @returns {number[]}
 * @description Definition obtained from https://es.wikipedia.org/wiki/Coeficiente_binomial
 */
const factorial = require('./modules/factorial');

const pascalTriangle = (lineNumber) => {
  const n = lineNumber;
  const nF = factorial(n);
  return Array(lineNumber + 1).fill(1)
    .map((value, k) => nF / (factorial(k) * factorial(n - k)));
}

module.exports = pascalTriangle;
