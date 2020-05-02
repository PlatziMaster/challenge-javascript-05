/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */



const pascalTriangle = (lineNumber) => {
    var array = [1,1];
    if(lineNumber === 0) return [1];
    if(lineNumber === 1) return array;
    for (let index = 1; index < lineNumber; index++) {
        var temp = [...array];
        array = calculateLine(temp);
    }
    return array;
}

const calculateLine = (temp) => {
    var array = [];
    array.push(temp[0]);
    for (let index = 0; index < temp.length -1 ; index++) {
        array.push(temp[index] + temp[index +1]);
    }
    array.push(temp[temp.length - 1]);
    return array;
}

module.exports = pascalTriangle;