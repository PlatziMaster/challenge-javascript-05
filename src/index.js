/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    let previous = [1];
    let current = [1, 1];

    switch(lineNumber) {
        case 0:
            return previous;
        case 1:
            return current;
        default:
            for (let n = 2; n <= lineNumber; n++) {
                previous = current;
                current = new Array(n+1).fill(0);
                let currentLength = current.length;
                current[0] = 1;
                current[currentLength-1] = 1;
                for (let k = 1; k < currentLength - 1; k++)
                    current[k] = previous[k-1] + previous[k];
            }
            return current;
    }

}

module.exports = pascalTriangle;