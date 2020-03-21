/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

 //factorial
function fact(n){
	var res=1;
	if(n===0){
		res = 1;
	}
	else{
		for(var i = 1; i<=n; i++){
			res = res*i;
		}		
	}
	return res;
}

//coeficiente binomial
function comb(m, k){
        return (fact(m)/(fact(k)*fact(m-k)));
}

const pascalTriangle = (lineNumber) => {
    var arr =[];
    for(var p = 0; p<=lineNumber; p++){
		for(var q = 0; q<=p; q++){
			arr[q]=comb(p,q);
		}
    }
    return arr;
}

module.exports = pascalTriangle;