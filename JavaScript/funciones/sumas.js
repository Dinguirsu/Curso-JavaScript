function sumar(){
    try{
        var a = prompt("Valor de A: ", "");

        if(!a || isNaN(a)){
            throw new Error("Valor Invalido de A: " + a);
        }

        var b = prompt("Valor de B: ", "");

        if(!b || isNaN(b)){
            throw new Error("Valor Invalido de B: " + b);
        }

        var c = parseInt(a) + parseInt(b);
        alert("La suma es: " + c);
    }
    catch(e){
        alert("El error es: " + e.message);
    }
    

}