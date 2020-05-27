/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const factorial = (n) => {
    if (n === 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

const combinatorial = (n, p) => {
    return factorial(n) / ((factorial(p) * factorial(n - p)))
}

const pascalTriangle = (lineNumber) => {
    let serie = []
    for (let i = 0; i <= lineNumber; i++) {
        serie.push(combinatorial(lineNumber, i))
    }
    return serie
}

module.exports = pascalTriangle;