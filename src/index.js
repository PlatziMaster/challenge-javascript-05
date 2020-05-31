/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  const number = [];

  for(let i = 0; i <= lineNumber; i++) {
    let newRow = [];

    for(let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        newRow.push(1);

      } else {
        newRow.push(number[i - 1][j - 1] + number[i - 1][j]);
        
      }
    }

    number.push(newRow);
  }

  return number[lineNumber];
}

module.exports = pascalTriangle;