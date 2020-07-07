/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let arrayPreve = [];
  let arrayPascal = [];
  for (i = 0; i <= lineNumber; i++) {
    arrayPascal.push(0)
  }
  arrayPascal[0] = 1
  for (i = 1; i <= lineNumber; i++) {
    for (j = 1; j <= i; j++) {
      arrayPreve[j] = arrayPascal[j - 1] + arrayPascal[j];
    }
    for (j = 1; j <= i; j++) {
      arrayPascal[j] = arrayPreve[j]
    }
  }
  return arrayPascal
}



module.exports = pascalTriangle;