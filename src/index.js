/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    let resp;
    (lineNumber > 0) ? resp = [1, 1] : resp = [1];

    for (let i = 0; lineNumber > 1 && i < lineNumber-1; i++) {
        let temp = [];
        for (let j = 0; j < resp.length - 1; j++) {
            let sum = resp[j] + resp[j + 1];
            temp.push(sum);

        }
        if (temp.length > 0) {
            resp =[1,
                 ...temp,
                  1]
        }
    }

    return resp;
}

module.exports = pascalTriangle;