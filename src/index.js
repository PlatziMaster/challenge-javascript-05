/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let previousPascalArray = [];
  let nextPascalArray = [];

  if (lineNumber === 0) {
    previousPascalArray.push(1);
  }
  else {
    if (previousPascalArray.length === 0) {
      previousPascalArray.push(1);
    }
    for (let index = 0; index < lineNumber; index++) {
      for (let index2 = 0; index2 < previousPascalArray.length; index2++) {
        if (index2 === 0) {
          nextPascalArray[index2] = 1
        } else {
          nextPascalArray[index2] = previousPascalArray[index2 - 1] + previousPascalArray[index2];
        }
      }
      nextPascalArray.push(1);
      previousPascalArray = nextPascalArray;
      nextPascalArray = [];
    }
  }
  return previousPascalArray;
}


module.exports = pascalTriangle;