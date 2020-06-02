const factorial = (n) => {
  return n === 0 ? 1 : n * factorial(n - 1);
};

/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  const pascalTriangle = [];
  for (let i = 0; i <= lineNumber; i++) {
    pascalTriangle.push(
      factorial(lineNumber) / (factorial(i) * factorial(lineNumber - i))
    );
  }
  return pascalTriangle;
};

module.exports = pascalTriangle;
