/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    
    if (lineNumber==0) {
        return [1]
    }
    var numeros = [1,1] //comienza nivel 1
    
    for (n=1; n<lineNumber; n++){ //iteración vertical
        var array = [1]
        for ( i=0; i <=numeros.length-2; i++) { //iteración horizontal
            array.push(numeros[i] + numeros[i+1]) 
        }
            array.push(1)
            numeros = array
        }
        return numeros
    }




module.exports = pascalTriangle;