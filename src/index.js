/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
        var dato = lineNumber+1;
        var arreglito = new Array(dato);
        function factorial(a){
            let b = 1;
            for(var j = a; j>0 ; j--){
                b *= j;
            }
            return b;
        }
        for(var i=0; i<dato; i++){
            arreglito[i]=(factorial(lineNumber)/(factorial(i)*factorial(lineNumber-i)));
        }
        return arreglito;

}

module.exports = pascalTriangle;