/*
crear función que solo permita que el usuario ponga más de 5 caracteres
*/




function validar(formulario){
    //obtener los valores del formulario
    if(formulario.nombre.value.length < 5){
        alert("Escribe  más de 5 caracteres en el campo nombre");
        formulario.nombre.focus();
    return false;
    }




//Crear opción para solo ingresar letras


var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
+ "qwertyuiopasdfghjklñzxcvbnm";

var checkStr = formulario.nombre.value;

var allvalid = true;

for(var i = 0; i < checkStr.length; i++){
    var ch = checkStr.charAt(i);
    for(var j = 0; j < checkOK.length; j++)
    if(ch == checkOK.charAt(j))
        break;
    if(j == checkOK.length){
        allvalid = false;
        break;
    }
}

if(!allvalid){
    alert("Escribe solo letras en el campo nombre");
    formulario.nombre.focus();
    return false;
}
    //"2"//

    var checkOK = "1234567890";

    var checkStr = formulario.edad.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }

    if(!allvalid){
        alert("Escribe solo numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }


    
   var txt = formulario.email.value;

   var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

   alert("Email "+(b.text(txt)?"":" no ")+" valido");

   return b.test(txt);
}