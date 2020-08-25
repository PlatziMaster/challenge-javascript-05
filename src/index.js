/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    if(lineNumber===0)
        return [1]
    else if(lineNumber===1)
        return [1,1]
    else{
        let base = [1,1]
        for (let i = 2; i<=lineNumber; i++){
            let newArray =  []
            for (let j = 0; j<=i; j++){
                if(j===0 || j===i)
                    newArray.push(1)
                else
                    newArray.push(base[j-1]+base[j])
            }
            base = newArray
        }
        return base
    }
}

module.exports = pascalTriangle;