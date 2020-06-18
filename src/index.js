/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
	let array =  []
	for (let i = 0; i <= lineNumber; i++) {
		if (i === 0) {
			array[i] = [1]
		} else if (i === 1) {
			array[i] = [1, 1]
		} else {
			array[i] = [];
			for (let j = 0; j < array[i - 1].length + 1; j++) {
				if (j === 0 || j === array[i -1].length) {
					array[i][j] = 1;
				} else {
					array[i][j] = array[i - 1][j - 1] + array[i - 1][j];
				}
			}
		}
	}
	return array[lineNumber]
}
console.log(pascalTriangle(1));


module.exports = pascalTriangle;