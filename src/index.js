/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

 const pascalTriangle = (number) => {
    let triangle = [[1, 1]];
    if(number === 0) {
      return [1];
    } else if(number === 1) {
      return triangle[0];
    } else {
      let pascalRow;

      for (let i = 0; i < number - 1; i++) {
        pascalRow = [];
        pascalRow.push(1);

        for(let j = 0; j < triangle[i].length - 1; j++) {
          pascalRow.push(triangle[i][j] + triangle[i][j + 1]);
        }
        pascalRow.push(1);
        triangle.push(pascalRow)
      }
      return triangle.pop();
    }
 }

console.log(pascalTriangle(0));
console.log(pascalTriangle(1));
console.log(pascalTriangle(2));
console.log(pascalTriangle(3));
console.log(pascalTriangle(4));
console.log(pascalTriangle(5));
console.log(pascalTriangle(6));
console.log(pascalTriangle(7));
module.exports = pascalTriangle;