/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const factorial = (number) => {
  if (!this.cache) {
    this.cache = {}
  }

  if (this.cache[number]) {
    return this.cache[number]
  }

  if (number === 1 || number === 0) {
    return 1
  }

  this.cache[number] = number * factorial(number - 1)
  return this.cache[number]
}

const pascalTriangle = (lineNumber) => {
  let coefficients = [];
  for (let i = 0; i <= lineNumber; i++) {
    coefficients[i] = factorial(lineNumber) / (factorial(i) * factorial(lineNumber - i));
  }

  return coefficients;
}

module.exports = pascalTriangle;