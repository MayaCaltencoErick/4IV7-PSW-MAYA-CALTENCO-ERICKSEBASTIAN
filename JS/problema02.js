function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function comision(){
    var valor = document.formulario.cantidad.value;
    var resultado = parseInt(valor);
    var comision = resultado*0.3;
    var total = resultado + comision;
    document.formulario.resultado.value="$"+total;
}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.resultado.value="";
}