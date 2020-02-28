/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = lineNumber => {
    let aux = [];
    let auxN = [];
    for (i = 0; i <= lineNumber; i++) {
        aux.push(0);
    }
    aux[0] = 1;
    for (i = 1; i <= lineNumber; i++) {
        for (j = 1; j <= i; j++) {
            auxN[j] = aux[j - 1] + aux[j];
        }
        for (j = 1; j <= i; j++) {
            aux[j] = auxN[j];
        }
    }
    return aux;
};

module.exports = pascalTriangle;
