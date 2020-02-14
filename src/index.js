/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    let oldArray
    let newArray
    lineNumber = lineNumber + 1
    for (i = 1; i <= lineNumber; i++) {
        newArray = []
        for (j = 1; j <= i; j++) {
            if (j === 1 || j === i) {
                newArray.push(1)
            } else {
                newArray.push(oldArray[j - 2] + oldArray[j - 1])
            }
        }
        oldArray = [...newArray]
    }
    return newArray
}

module.exports = pascalTriangle;