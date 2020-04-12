/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */
const pascalTriangle = (lineNumber) => {
  // Formula para obtener las combinaciones
  // = (i! / j! (i - j)!)
  const formula = (i, j) => {
    return Math.round(factorial(i) / (factorial(j) * factorial(i - j)));
  }

  // Obtenemos el factorial
  // Factorial 5 = 120 = 5 * 4 * 3 * 2 * 1
  const factorial = (number) => {
    if (number <= 1) return 1;
    return number * factorial(number - 1);
  }

  // Llenamos matriz agregando los numero de la ultima fila en la pirámide de pascal.
  let pascalTriangleArray = [];
  for (let j = 0; j <= lineNumber; j++) {
    pascalTriangleArray[j] = formula(lineNumber, j);
    // Imprimir las posiciones de acuerdo al numero recibido
    // console.log(`${lineNumber} ${j}`)
  }

  return pascalTriangleArray;
}
module.exports = pascalTriangle;