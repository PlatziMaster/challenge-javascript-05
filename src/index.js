/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    
    let rowArray = [];  //  Creando la matríz del tríangulo
    
    if (lineNumber == 0) { // Exepción de 0
        return rowArray = [1];
      } if (lineNumber == 1) { // Exepción de 1
        return rowArray = [1,1];
      } else {
        for (i = 0; i <= lineNumber; i++) { 
            let top = factorial(lineNumber); // n!
            let k = factorial(i); // k!
            let n = factorial(lineNumber - i); // (n-k)!
            let combination = k * n; // (k!(n-k)!)
            rowArray[i] = top / combination; // n!/(k!(n-k)!)
        }

        return rowArray;
      }
  
}

const factorial = (n) => {  // Función que determina el factoríal de un número
    if (n === 0){  //Exepción de 0
        return 1;
    } 
    
    return n * factorial (n-1); 
  };

module.exports = pascalTriangle;