/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  const n = Number.parseInt(lineNumber)
  let pascalArray=[]
  let temporalArray
  for (let row = 0; row < n+1; row++) {
    temporalArray=[1]
    for(let i=0;i<pascalArray.length+1;i++){
      if(pascalArray[i]>0&&pascalArray[i+1]>0) {
        temporalArray.push(pascalArray[i]+pascalArray[i+1])
      }
    }
    if(row>0)temporalArray.push(1)
    pascalArray=temporalArray
  }
  return pascalArray
}

module.exports = pascalTriangle;