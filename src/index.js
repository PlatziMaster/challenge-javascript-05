/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let arr = [];
  let arrSecond = [1, 1];

  if (lineNumber === 0) {
      arr.push(1);
      return arr;
  }
  if (lineNumber === 1) {
    arr.push(1, 1);
    return arr;
  }
  if (lineNumber > 1) { 
      for (let i = 2; i<= lineNumber; i++) {
          arr = [1];
          for(let j = 1; j < i; j++) {
              arr.push(arrSecond[j-1] + arrSecond[j]);
          }
          arr.push(1);
          arrSecond = arr;
      }
      return arr;
  }
};

module.exports = pascalTriangle;