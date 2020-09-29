/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const arreglo = [1]
const pascalTriangle = (lineNumber, line) => {
  let newArreglo = [1]
  let iteration = --line.length
  let left, right, index=0, indexNext=1, newValue
  do {
    if (indexNext <= line.length ){
      left = line[index]
      right = line[indexNext] || 1
      newValue = left + right
  
      newArreglo.push(newValue)
    } else {
      newArreglo.push(1)
    }

    ++index
    ++indexNext
    --iteration
  } while (iteration >= 0 )
  console.log(newArreglo);

  return newArreglo
}

pascalTriangle(2, arreglo)

module.exports = pascalTriangle;