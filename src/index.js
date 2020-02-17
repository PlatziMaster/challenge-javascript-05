/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const factorial = number => {
  if (number === 0 || number === 1) return 1;

  for (var i = number - 1; i >= 1; i--) {
    number *= i;
  }

  return number;
};

function combinatoric(n, k) {
  return Math.round(factorial(n) / (factorial(k) * factorial(n - k)));
}

const pascalTriangle = lineNumber => {
  let result = [];
  const middle = Math.floor((lineNumber + 1) / 2);

  for (i = 0; i <= middle; i++) {
    result.push(combinatoric(lineNumber, i));
  }

  for (i = lineNumber - middle; i > 0; i--) {
    result.push(result[i - 1]);
  }

  return result;
};

module.exports = pascalTriangle;
