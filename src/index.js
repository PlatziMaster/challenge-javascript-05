/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    const matriz = [
        [1],
        [1, 1]
    ];

    if (lineNumber < 2) {
        return matriz[lineNumber]
    } else {
        for (let i = 2; i <= lineNumber; i++) {
            matriz.push([1])
            for (let j = 1; j < i; j++) {
                matriz[i].push(matriz[i - 1][j - 1] + matriz[i - 1][j])
            }
            matriz[i].push(1)
        }
        return matriz[lineNumber]
    }

}

module.exports = pascalTriangle;