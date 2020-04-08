/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {

  if (lineNumber == 0) {
      let fila = [1];
      return fila;
  }else{
      let fila = [0, 1, 0];
      let nuevaFila = [];
      for(let n = 1; n <= lineNumber; n++){
        let i = 1
        for (i; i < fila.length; i++) {
          let num1 = fila[i - 1] + fila[i];
          nuevaFila.push(num1);
        }
        fila = [0, ...nuevaFila, 0];
        nuevaFila = [];
      }
      return fila.slice(1, fila.length-1);
  }
}

module.exports = pascalTriangle;