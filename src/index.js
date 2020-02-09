/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = lineNumber => {
  let number = [1];
  let numberAux = [];
  for (let i = 0; i <= lineNumber; i++) {
    number = [];
    for (let j = 0; j <= i; j++) {
      if (numberAux.length >= 2) {
        if (numberAux[j - 1] && numberAux[j]) {
          number.push(numberAux[j - 1] + numberAux[j]);
        } else {
          number.push(numberAux[0]);
        }
      } else {
        number.push(1);
      }
    }
    numberAux = number;
  }
  return number;
};

module.exports = pascalTriangle;
