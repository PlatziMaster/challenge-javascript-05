/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let result;
  lineNumber > 0 ? (result = [1, 1]) : (result = [1]);

  for (let i = 0; lineNumber > 1 && i < lineNumber - 1; i++) {
    let tmp = [];
    for (let j = 0; j < result.length - 1; j++) {
      let sum = result[j] + result[j + 1];
      tmp.push(sum);
    }
    if (tmp.length > 0) {
      result = [1, ...tmp, 1];
    }
  }

  return result;
};

module.exports = pascalTriangle;
