/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  
  const ultimaFila = lineNumber + 1

  const coleccionFilas = []

  for (let index = 0; index < ultimaFila; index++) {
    
    coleccionFilas.push([1])
    
    if(index == 0){
        continue;
    }

    if(coleccionFilas[index - 1].length > 1){
        let contador = 1
    
        while(contador < coleccionFilas[index - 1].length){

            let indice = contador
            coleccionFilas[index].push(coleccionFilas[index - 1][indice - 1] + coleccionFilas[index - 1][indice]);

            contador++
        }
       
    }
    
    coleccionFilas[index].push(1)
    

  }
  return coleccionFilas[lineNumber]

}

module.exports = pascalTriangle;