/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  if(lineNumber < 0) throw new Error('Error: Line number must be positive');
  if(lineNumber === 0) return [1];

  let pTriangle = [[1, 1]];
  if(lineNumber === 1) return pTriangle[0];

  let pascalRow;
  for (let i = 0; i < lineNumber - 1; i++) {
    pascalRow = [];
    pascalRow.push(1);

    for (let j = 0; j < pTriangle[i].length - 1; j++) {
      pascalRow.push(pTriangle[i][j] + pTriangle[i][j + 1])
    }
    
    pascalRow.push(1);
    pTriangle.push(pascalRow);
  }

  return pTriangle.pop();
}

module.exports = pascalTriangle;