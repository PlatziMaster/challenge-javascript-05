/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    let trianguloPascal = [1];
    for (let cont1 = 0; cont1 <= lineNumber; cont1++) {
        let temporal = Array();
        temporal[0] = 1;
        temporal[cont1] = 1;
        for (let cont2 = 1; cont2 < cont1; cont2++) {
            if (cont2 != cont1) {
                temporal[cont2] = trianguloPascal[cont2] + trianguloPascal[cont2-1];
            }
        }
        trianguloPascal = temporal;
    }
    return trianguloPascal;
  
}

module.exports = pascalTriangle;