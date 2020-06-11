/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
	let triangle =  []

	for (let i = 0; i <= lineNumber; i++) {
		if (i === 0) {
			triangle[i] = [1]
		} else if (i === 1) {
			triangle[i] = [1, 1]
		} else {
			triangle[i] = [];
			for (let j = 0; j < triangle[i - 1].length + 1; j++) {
				if (j === 0 || j === triangle[i -1].length) {
					triangle[i][j] = 1;
				} else {
					triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
				}
			}
		}
	}
	return triangle[lineNumber]
}

module.exports = pascalTriangle;