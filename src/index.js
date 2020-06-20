/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    let triangulo = [1]
    for (let i = 0; i <= lineNumber; i++) {
        let tmp = new Array()
        tmp[0] = 1
        tmp[i] = 1
        for (let j = 1; j < i; j++) {
            if (j != i) {
                tmp[j] = triangulo[j] + triangulo[j-1]
            }
        }
        triangulo = tmp
    }
    return triangulo
}

module.exports = pascalTriangle;