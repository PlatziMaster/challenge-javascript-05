/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    const pascalTrianglePerLine = [];                             //  Its like a multidimensional array, saves line per line the pascal triangle to return later que specific line
  
    for (let i = 0; i <= lineNumber; i++){
      let newLine = [];
  
      for (let j = 0; j <= i; j++){
  
        if (j === 0 || j === i) {                                 //  The first and last time at the second cicle need have a 1 becaues thats the border of the triangle
          newLine.push(1);
        } else {
          newLine.push(
            pascalTrianglePerLine[i - 1][j - 1] + pascalTrianglePerLine[i - 1][j]   //  If is not the first line, need to take the top left and top right numbers and add them
          );
        }
  
      }
  
      pascalTrianglePerLine.push(newLine);
    }
  
    return pascalTrianglePerLine[lineNumber];
  };
  
  module.exports = pascalTriangle;
  