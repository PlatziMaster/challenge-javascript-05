/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const getActualLine = (lastLine) => {
    const actualLine = []
    lastLine.forEach((node, index) => {
        const prevNode = lastLine[index - 1] || 0
        actualLine.push(prevNode + node)
    })
    actualLine.push(lastLine[lastLine.length - 1])
    return actualLine
}

const pascalTriangle = (lineNumber) => {
    const lines = new Map()
    for (let i = 0; i <= lineNumber; i++) {
        const lastLine = lines.get(i - 1)
        if (!lastLine) {
            lines.set(i, [1])
        } else {
            lines.set(i, getActualLine(lastLine))
        }
    }
    return lines.get(lineNumber)
}

module.exports = pascalTriangle;