/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */
function factorial (number) {
  if (number === 0) {
    return 1
  }
  return  factorial(number - 1) * number
}

function algorithm (a) {
  return function () {
    let elements = []
    for (let i = 0; i <= a; i++) {
      elements = elements.concat(factorial(a) / Math.imul(factorial(a - i), factorial(i)))
    }
    return elements
  }
}
const pascalTriangle = (lineNumber) => {
  const result = algorithm(lineNumber)
  return result()
}

module.exports = pascalTriangle;