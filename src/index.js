/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = lineNumber => {
	let retorno = [];
	if (lineNumber === 0) {
		retorno.push(1);
	} else if (lineNumber === 1) {
		retorno.push(1);
		retorno.push(1);
	} else {
		const pascalAnterior = pascalTriangle(lineNumber - 1);
		retorno.push(1);
		for (let index = 1; index < pascalAnterior.length; index++) {
			retorno.push(pascalAnterior[index - 1] + pascalAnterior[index]);
		}
		retorno.push(1);
	}
	return retorno;
};

module.exports = pascalTriangle;
