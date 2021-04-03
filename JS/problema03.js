function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function Descuento(){
    var valor = document.formulario.cantidad.value;
    var resultado = parseInt(valor);
    var Descuento = resultado*0.15;
    var total = resultado - Descuento;
    document.formulario.resultado.value="$"+total;
}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.resultado.value="";
}