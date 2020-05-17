/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const crtNewRow = (arr, n) => {
    let num1 = 0;
    let num2 = 0;
    let nxtLine = [];

    for(let i = 0; i < n-1; i++){
        num1 = arr[i]
        num2 = arr[i+1]
        nxtLine.push(num1 + num2)
      }

      nxtLine.push(1)
      return nxtLine;
}

const pascalTriangle = (lineNumber) => {
  let newLine = [];
  let befLine = [];

  for(let i = 0; i <= lineNumber; i++){
    if(i < 2){
      befLine.push(i);      
      newLine = crtNewRow(befLine, befLine.length);
    }else {
      befLine = newLine;
      befLine.unshift(0);
      newLine = crtNewRow(befLine, befLine.length);
    }
  }

  console.log(newLine)
  return newLine;
}

pascalTriangle(0)
pascalTriangle(1)
pascalTriangle(2)
pascalTriangle(3)
pascalTriangle(4)
pascalTriangle(5)
pascalTriangle(6)
pascalTriangle(7)

module.exports = pascalTriangle;