/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    let level = [1];
    let i=0;
    level = new Array(i+1).fill(1);
    for (i; i < lineNumber; i++) {
        let next = level;
        next.unshift(1);
        if(i>0){
            for (let j = 1; j < level.length-1; j++) {
                next[j]=level[j]+level[j+1];       
            }
        }
        level = next;
    }
    return level;
}

module.exports = pascalTriangle;