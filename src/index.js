/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */


const pascalTriangle = (lineNumber) => {
	// Declaramos dos arreglo, uno el que retornaremos y el otro es un arreglo auxiliar
	let triangle = [1];
	let triangleAux = [];

	// Consideramos un caso y regresamos solo el [1]
	if (lineNumber <= 0)
		return triangle

	// Consideramos como entrada el número 1 y devolvemos [1, 1]
	triangle.push(1);

	// Consideramos los casos en que la entrada sea 2 o más
	var N = 2;
	for(let j=1; j<lineNumber; j++) {
		
		triangleAux = triangle.map((elemento) => elemento);
		
		for(let i=1; i<N; i++) {
			triangle[i] = triangleAux[i-1] + triangleAux[i]; 
		}
		
		triangle[N]=1;
		N++;
	}
		

  return triangle;
}

module.exports = pascalTriangle;