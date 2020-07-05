function triaguloDePascal(x){
    var dato = x+1;
    var arreglito = new Array(dato);
    function factorial(a){
        let b = 1;
        for(var j = a; j>0 ; j--){
            b *= j;
        }
        return b;
    }
    for(var i=0; i<dato; i++){
        arreglito[i]=(factorial(x)/(factorial(i)*factorial(x-i)));
    }
    return arreglito;
}


console.log(triaguloDePascal(3));
