/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
	let defaultTriangle = [1]

	let pascalTriangle = [1]
	let position = 1 //irá i++
	let exponent = lineNumber //irá i--
	let coeficient = 1

	if (lineNumber === 0){
		return defaultTriangle
	} else if (lineNumber === 1){
		defaultTriangle.push(1)
		return defaultTriangle
	}

	for (position=1; position < lineNumber+1; position++){
		coeficient = exponent * coeficient / position
		pascalTriangle.push(coeficient)

		exponent--
	}

	return pascalTriangle
}

module.exports = pascalTriangle;