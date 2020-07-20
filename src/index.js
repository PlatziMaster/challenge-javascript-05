/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let number = [1]
  let x = 1
  let count = 1
  for (let ca = 0; ca <  lineNumber ; ca++) {
    let result = (x * (lineNumber - ca)) / count
    number.push(result)
    x = result
    count++
  }
  return number
}

module.exports = pascalTriangle;