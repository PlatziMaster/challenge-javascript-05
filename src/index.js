/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let triangulo = [[1],[1,1]]
  if (lineNumber === 0) return triangulo[0];
  if (lineNumber === 1) return triangulo[1];
  if(lineNumber >= 2){
    for (let i = 2; i <= lineNumber; i++){
      anadirLinea(triangulo)
    }
  }
  return triangulo[lineNumber]
}

const anadirLinea = (triangulo) => {
  lineaAnterior = triangulo[triangulo.length - 1]
  lineaNueva = [1]
  for (let i = 0; i < lineaAnterior.length - 1; i++){
    lineaNueva.push(lineaAnterior[i] + lineaAnterior[i + 1])
  }
  lineaNueva.push(1)
  return triangulo.push(lineaNueva)
}

module.exports = pascalTriangle;