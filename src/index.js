/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let result = new Array(lineNumber + 1);
  // console.log(result);
  for (let i = 0; i <= lineNumber; i++) {
    result[i] = new Array(i + 1).fill(1);
    //console.log(result);
  }
  for (let i = 2; i <= lineNumber; i++)
    for (let j = 1; j < result[i].length - 1; j++)
      result[i][j] =
        result[i - 1][j - 1] + result[i - 1][j];
  //console.log(result);
  return result[lineNumber];
};
//console.log(pascalTriangle(7));

module.exports = pascalTriangle;
