/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const factorial = (number) => {
    let res = 1;
    for (let i = 1; i <= number; i++) {
      res = res * i;
    }
    return res;
  };
  
  
  const cominaciones = (n, k) => {
    return factorial(n) / (factorial(k) * factorial(n - k));
  };

const pascalTriangle = (lineNumber) => {
    let array = [];
    for (let j = 0; j <= lineNumber; j++) {
        array.push(cominaciones(lineNumber,j));
    }
  return array;
}

module.exports = pascalTriangle;








