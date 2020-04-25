/**
 * @param {number} number
 * @return {number}
 */

const factorial = (number) => {
    if(number < 2) return 1;
    return number * factorial(number -1);
}

/**
 * @param {number} n - chosen items
 * @param {number} p - number of options
 * @return {number}
 */

const combinatoria = (n, p) => {
    return (factorial(n) / (factorial(p) * factorial(n - p)));

}
/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    const line = [];
    for(let i=0; i<=lineNumber; i++) {
        line.push(combinatoria(lineNumber, i));
    }
    return line;
}

module.exports = pascalTriangle;