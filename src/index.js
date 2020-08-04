/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  const arrayA = [[1]];
  for (let j = 0; j < lineNumber; j++) {
    const arrayB = [1];
    for (let i = 1; i < arrayA[j].length; i++) {
      arrayB.push(arrayA[j][i - 1] + arrayA[j][i]);
    }
    arrayB.push(1);
    arrayA.push(arrayB);
    console.log(arrayA); // Impresión de prueba
  }
  return arrayA[lineNumber];
};

module.exports = pascalTriangle;
