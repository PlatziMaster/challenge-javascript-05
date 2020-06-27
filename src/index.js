/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let result;

  if (lineNumber == 0) {
    return [1];
  } else if (lineNumber == 1) {
    return [1, 1];
  } else {
    result = [1, 1];
    result = iteraciones(result, lineNumber);
    return result;
  }
};

const iteraciones = (result, lineNumber) => {
  let tmp = [];
  for (let j = 0; j < result.length - 1; j++) {
    let sum = result[j] + result[j + 1];
    tmp.push(sum);
  }
  result = [1, ...tmp, 1];

  return result.length === lineNumber + 1
    ? result
    : iteraciones(result, lineNumber);
};

module.exports = pascalTriangle;
