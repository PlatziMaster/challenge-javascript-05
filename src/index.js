/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    let array = new Array(lineNumber + 1)
    for (i = 0; i < array.length; i++) {
        array[i] = new Array(i + 1)

        for (j = 0; j <= array[i].length; j++) {
            array[i][0] = 1

            if (array[i - 1] && array[i - 1][j - 1]) {
                array[i][j] = array[i - 1][j] + array[i - 1][j - 1]
            }


            array[i][array[i].length - 1] = 1
        }
    }
    return array[lineNumber]

}
console.log(pascalTriangle(7))
module.exports = pascalTriangle;