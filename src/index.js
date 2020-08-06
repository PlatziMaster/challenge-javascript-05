/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    let iterador = lineNumber+1;

    let triangulo = [];

	triangulo.push([1]);

	for (let i = 1; i < iterador; i++) {
		let filaAnterior = triangulo[i - 1];
		let nuevaFila = [];

		nuevaFila.push(1);

		for (let j = 1; j < filaAnterior.length; j++) {
			nuevaFila.push(filaAnterior[j - 1] + filaAnterior[j]);
		}

		nuevaFila.push(1);
		triangulo.push(nuevaFila);
	}

    console.log(triangulo[lineNumber]);
	return triangulo[lineNumber];
};

module.exports = pascalTriangle;
