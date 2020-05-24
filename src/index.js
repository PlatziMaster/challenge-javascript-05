/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

function factorial(n) {
    if(n==0 || n==1){
        n=1;
    }else{
       n = factorial(n-1)*n; 
    }
    return n;
}

function combinaciones(lineNumber,posLine){
    return factorial(lineNumber)/(factorial(posLine)*factorial(lineNumber-posLine));
}

const pascalTriangle = (lineNumber) => {
    let res = [];
    for (var posLine=0; posLine<=lineNumber;posLine++){
       res.push(combinaciones(lineNumber,posLine)); 
    }
    return res;
}

module.exports = pascalTriangle;