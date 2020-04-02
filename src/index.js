/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let number = []
    if(lineNumber == 0){
        number.push(1)
    }else if (lineNumber == 1) {
        number = [1,1]
    } else {
        let casobase = [1,1]

        for (let index = 1; index < lineNumber; index++) {        
            let aux = [1]
            for (let i = 0; i < casobase.length-1; i++) {
                aux.push(casobase[i]+casobase[i+1])        
            }
            aux.push(1)
            casobase = aux
        }
        number = casobase
    }
    
  return number
}

module.exports = pascalTriangle;