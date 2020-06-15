/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = ( lineNumber ) => {
    let init = [];
    if ( lineNumber == 0 ) {
        init.push( 1 )
    } else if ( lineNumber == 1 ) {
        init = [1, 1]
    } else {
        let sum = [1, 1], i = 1;
        do { 
            let result = [1], j = 0;
            while ( j < sum.length-1 ) {
                result.push ( sum[j] + sum[j + 1] ); 
                j++;
            }
            result.push( 1 );
            sum = result;
            i++
        } while (  i < lineNumber  );
        init = sum;
    }

    return init;
}

module.exports = pascalTriangle;

