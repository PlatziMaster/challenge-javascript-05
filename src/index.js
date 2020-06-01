/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    let vector = new Array(lineNumber + 1).fill(1);
    let vectorAux = new Array(lineNumber + 1).fill(1);
    for (let j = 1; j < lineNumber; j++) {
        for (let i = 1; i < j + 1; i++) {
            vector[i] = vectorAux[i - 1] + vectorAux[i];
        }
        for (let k = 0; k < vectorAux.length; k++) {
            vectorAux[k] = vector[k];
        }
    }
    return vector;

}
module.exports = pascalTriangle;