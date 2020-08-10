/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    let TempArray = [1, 1];
    let ActualArray = [1];

    if(lineNumber === 0) {
        return ActualArray;
    } 

    if(lineNumber === 1) {
        return TempArray;
    }

    for (let i = 2; i <= lineNumber; i++)
    {
        ActualArray = [1];
        for(let j = 1; j < i; j++)
        {
            ActualArray.push(TempArray[j-1] + TempArray[j]);
        }
        ActualArray.push(1);
        TempArray = ActualArray;
    }
    return ActualArray;
};

module.exports = pascalTriangle;