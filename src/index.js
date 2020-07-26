/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {

  let arrayTirangule = [];

  if (lineNumber == 0) {
    return arrayTirangule = [1];
  } if (lineNumber == 1) {
    return arrayTirangule = [1,1];
  } else {
    for (i = 0; i <= lineNumber; i++) {
      let arriba = factorial(lineNumber);
      let a = factorial(i);
      let b = factorial(lineNumber - i);
      let c = a * b;
      arrayTirangule[i] = arriba / c;
    }
    return arrayTirangule;
  }
}

  const factorial = (n) => {
    if (n === 0){ 
      return 1; 
    } return n * factorial (n-1); 
  };

 

module.exports = pascalTriangle;
