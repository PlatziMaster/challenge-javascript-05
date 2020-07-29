/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  const matrixPascal = [[1]];
  for (let j = 0; j < lineNumber; j++) {
		const tempLine = [1];
		for (let i = 1; i < matrixPascal[j].length; i++) {
      tempLine.push(matrixPascal[j][i-1]+matrixPascal[j][i])
		}
		tempLine.push(1);
		matrixPascal.push(tempLine);
	}
	return matrixPascal[lineNumber];
}

module.exports = pascalTriangle;