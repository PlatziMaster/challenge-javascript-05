/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  if ( lineNumber <= 1) {
    let triangle = [];
    triangle[0] = 1;
    triangle[lineNumber] = 1;
    return triangle
  }
  if (lineNumber > 1) {
    let triangle = pascalTriangle(lineNumber - 1);
    let tmpTriangle = [];
    tmpTriangle[0] = 1;
    tmpTriangle[lineNumber] = 1;
    for (let i = 1; i < lineNumber; i++) {
      tmpTriangle[i] = triangle[i - 1] + triangle[i];
    }
    triangle = tmpTriangle
    return triangle
  }
}

module.exports = pascalTriangle;