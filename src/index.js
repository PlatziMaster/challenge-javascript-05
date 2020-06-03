/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
	let triangulo = [[1], [1, 1]];

	if (lineNumber === 0) return triangulo[0];

	if (lineNumber === 1) return triangulo[1];

	let nuevoArray;
	for (let i = 1; i < lineNumber; i++) {
		nuevoArray = [];
		nuevoArray.push(1);

		for (let j = 0; j < triangulo[i].length - 1; j++) {
			let suma = triangulo[i][j] + triangulo[i][j + 1];
			nuevoArray.push(suma);
		}
		nuevoArray.push(1);
		triangulo.push(nuevoArray);
	}

	return triangulo[triangulo.length - 1];
};

module.exports = pascalTriangle;
