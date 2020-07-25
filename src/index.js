/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */
const pascalTriangle = (lineNumber) => {
//create array
var array = [1]
var c = 2
	if(lineNumber < 1 ){
		return array;
 	}
 	if(lineNumber == 1 ){
		return [1,1];
 	}
//add [1, lineNumber]
array = [1,lineNumber]
	//add content using the binomial formula
	for(let j=1; j<lineNumber-1;j++){
		value=((lineNumber-j)*array[array.length- 1])/c
		/*add content to array 4 example if lineNumer=4 then, this part will print 4,6,4*/
		array.push(value)
		c+=1
	}
	//add 1 to final line
	array.push(1)
	return array
}

module.exports = pascalTriangle;
