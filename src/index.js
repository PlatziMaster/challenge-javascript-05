/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
    
    var array5 = new Array(lineNumber+1);
    for(var y=0; y<array5.length; y++){
      array5[y] = 1;
    }
    var array1 = new Array(lineNumber+1);
    for(var y=0; y<array1.length; y++){
      array1[y] = 1;
    }
    if (lineNumber === 0){
      array1[0]=1;
      return array1;
    }else if (lineNumber === 1){
      array1[0]=1;
      array1[1]=1;
      return array1;
    }else{
      for(var j=1; j<lineNumber; j++){
          for(var i=1; i<j+1; i++){ 
            array5[i] = array1[i-1] + array1[i];
          }
          for(var x=0; x<array1.length; x++){
             array1[x] = array5[x];
          }       
      }
      return array5; 
    }
}

module.exports = pascalTriangle;