/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const generateRow = (previousRow) => {
	let nextRow = new Array();
	nextRow.push(1);
    previousRow.forEach((number, index) => {
        if(previousRow.length > 1 && index != (previousRow.length -1)){
            nextRow.push(number + previousRow[index + 1])
        }
    });
    nextRow.push(1);
    console.log(nextRow)
	return nextRow;
};

const pascalTriangle = (lineNumber) => {
    if (lineNumber === 0) return [1]
	return generateRow(pascalTriangle(lineNumber -1));
}; 

pascalTriangle(3);
module.exports = pascalTriangle;