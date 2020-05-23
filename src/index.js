/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    let triangle = [[1]], row;
    for (let x = 0; x < lineNumber; x++) {
        row = [1];
        for (let y = 1, length = triangle[x].length; y < length; y++) {
            row[y] = triangle[x][y] + triangle[x][y-1];
        }
        row.push(1);
        triangle.push(row)
    }
    return triangle[lineNumber];
}

module.exports = pascalTriangle;