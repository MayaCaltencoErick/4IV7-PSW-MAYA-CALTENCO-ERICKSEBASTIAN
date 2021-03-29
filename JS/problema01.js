//Vamos a crear una función de validad con una expresión regular la entrada de dats en el campo de texto

function validar(e){
    var teclado=(document.all)?e.keyCode:e.wich;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    
    return patron.test(prueba);

}

function interes(){
     var valor=document.formulario.cantidad.value;
     var resultado = parseint(valor);
     var interes = resultado*0.02;
     var total = resultado + interes;
     document.formulatio.sueldoti.value="$"+total;    
     }

function borrar(){
    document.formulatio.cantidad.value="";
    document.sueldoti.cantidad.value
}