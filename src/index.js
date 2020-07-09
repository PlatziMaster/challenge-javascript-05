/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    var result = []
    // Create matrix/triangle with zero
    for (let i = 0; i < lineNumber+1; i++) {
        let aux = [];
        for (let j = 0; j < i+1; j++) {
            aux.push(0)
        }
        result.push(aux)
    }
    // Put 1 in the beginning and the end
    for (let i = 0; i < result.length; i++) {
        let element = result[i];

        if (element.length === 1) {
            element[0] = 1;
        } else if (element.length === 2) {
            element[0] = 1;
            element[1] = 1;
        }
        else {
            element[0] = 1;
            element[element.length-1] = 1;
        }
    }
    // Replace zero
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length; j++) {
            let element = result[i][j];
            if (element === 0) {
                let aux = result[i-1][j-1] + result[i-1][j]
                result[i][j] = aux;
            }
        }
    }

    return result[lineNumber]
}

module.exports = pascalTriangle;