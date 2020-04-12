// # ----Array bidimensional----
// 0 -----------(0,0)-----------
// 1 --------(1,0)-(1,1)--------
// 2 -----(2,0)-(2,1)-(2,2)-----
// 3 --(3,0)-(3,1)-(3,2)-(3,3)--

// # ------Pascal Triangle------
// 0 ------------(1)------------
// 1 ----------(1)-(1)----------
// 2 --------(1)-(2)-(1)--------
// 3 ------(1)-(3)-(3)-(1)------

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

  // Creamos el primer arreglo ("Filas")
  let pascalTriangleArray = new Array(lineNumber + 1);
  for (let i = 0; i <= lineNumber; i++) {
    // Creamos el segundo arreglo para crear un arreglo bidimensional ("Columnas")
    pascalTriangleArray[i] = new Array(lineNumber + 1);
  }

  // Llenamos matriz bidemencional agregando los numero de la pirámide.
  for (let i = 0; i <= lineNumber; i++) {
    for (let j = 0; j <= i; j++) {
      pascalTriangleArray[i][j] = formula(i, j);
      // Imprimir las posiciones de acuerdo al numero recibido
      // console.log(`${i} ${j}`)
    }
  }

  // Imprimimos los datos del triangulo de pascal
  for (let i = 0; i <= lineNumber; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(pascalTriangleArray[i][j])
    }
  }
}
pascalTriangle(3);