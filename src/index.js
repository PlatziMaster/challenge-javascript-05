/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

function factorial(n){
    let resultado = 1;
    for(let i = 1; i <= n; i++)
        resultado *= i;

    return resultado;
}

function calcFactoria(lineNum, nextLine){
    return (factorial(lineNum)) / (factorial(nextLine) * factorial(lineNum-nextLine));
}

const pascalTriangle = (lineNumber) => {
    let pascal = [];
    let resul;

    for(let i =0; i <= lineNumber; i++){
        for(let j = 0; j <= i; j++){
            let valor = calcFactoria(i, j);
            pascal.push(valor);
        }
        resul = pascal;
        pascal = [];
    }
    return resul;
}

module.exports = pascalTriangle;