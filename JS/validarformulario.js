/*
crear función que solo permita que el usuario ponga más de 5 caracteres
*/




function validar(formulario){
    //obtener los valores del formulario
    if(formulario.Nombre.value.length < 5){
        alert("Escribe  más de 5 caracteres en el campo nombre");
        formulario.Nombre.focus();
    return false;
    }




//Crear opción para solo ingresar letras


    var checkOK="QWETYUIOPASDFGHJKLÑZXCVBNM"
    +"qwretyiuopañslkdfjghzmxncbv";

    var checkSTR = formulario.Nombre.value;

    var allvalid = true;

    for(var i=0; i<checkSTR.length; i++){
        var ch = checkSTR.charAT(i);
        for(var j=o; j<checkOK.length; j++)
        if(ch==checkOK.charAT(j))
            break;
        if(j==checkOK.lenght){
            allvalid=false;
            break;
        }
    }
        if(!allvalid){
            alert("Escribe solo letras en el campo nombre");
            formulario.Nombre.focus();  
            return false;
        }
 
    

    var checkOK="1234567890";

    var checkSTR = formulario.Edad.value;

    var allvalid = true;

    for(var i=0; i<checkSTR.length; i++){
        var ch = checkSTR.charAT(i);
        for(var j=o; j<checkOK.length; j++)
        if(ch==checkOK.charAT(j))
            break;
        if(j==checkOK.lenght){
            allvalid=false;
            break;
        }
    }
        if(!allvalid){
            alert("Escribe solo números en el campo edad");
            formulario.Numero.focus();  
            return false;
        }

    
   var txt = formulario.Email.value;

   var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

   alert("Email "+(b.text(txt)?"":" no ")+" valido");

   return b.test(txt);
}