/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    const results = [];
    for (let i = 0; i <= lineNumber; i++) {
        if (i === 0) {
            results[i] = [1];
        }
        else if (i === 1) {
            results[i] = [1, 1]
        }
        else {
            for (let j = 0; j <= i; j++) {
                if (j === 0) {
                    results[i] = [];
                    results[i][j] = 1;
                }
                else if (j === i) {
                    results[i][j] = 1;
                }
                else {
                    results[i][j] = results[i - 1][j - 1] + results[i - 1][j];
                }
            }
        }
    }
    return results[lineNumber];
}
module.exports = pascalTriangle;