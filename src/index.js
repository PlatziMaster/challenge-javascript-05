/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let coeficientes = [];
  for (let i = 0; i <= lineNumber; i++) {
    coeficientes[i] =
      calcule(lineNumber) / (calcule(i) * calcule(lineNumber - i));
  }
  return coeficientes;
};

const calcule = (numero) => {
  if (numero === 0) {
    return 1;
  }
  return numero * calcule(numero - 1);
};

module.exports = pascalTriangle;
