/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const generateNextRow= (lastRow)=>{
    let nextRow = []
    
    nextRow.push(1)

    for(let i=0; i<lastRow.length -1; i++){
      nextRow.push(lastRow[i]+ lastRow[i+1])
    }
    nextRow.push(1)
    return nextRow
  }
  
  const pascalTriangle = (lineNumber) => {
  if(lineNumber === 0){
    return [1]
  }
  return generateNextRow(pascalTriangle(lineNumber-1))
}
module.exports = pascalTriangle;