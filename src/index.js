/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let array = [];
  array[0] = 1;

  if (lineNumber == 0){
    return array;
  } else if (lineNumber == 1){
    array[1] = 1;
    return array;
  } else if (lineNumber > 1){
    return build(lineNumber, array);
  } else {
    console.log("I'm only accept positive integer numbers.");
  }
}

function build(exponent, array) {
  let coefficient = 1;
  let exponent_x = exponent;
  let exponent_y = 1;
  let temp = 0;

  while(exponent_x > 0){
    temp = (coefficient * exponent_x) / exponent_y;
    array.push(temp);
    coefficient = temp;
    exponent_x -= 1;
    exponent_y += 1;
  }

  return array;
}

module.exports = pascalTriangle;