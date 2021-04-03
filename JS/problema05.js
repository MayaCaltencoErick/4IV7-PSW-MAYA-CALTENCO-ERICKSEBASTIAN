function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function Calificacion(){
    var valor_1= document.formulario.cantidad.value;
    var valor_2= document.formulario.cantidad2.value;
    
    var resultado1 = parseInt(valor_1);
    var resultado2 = parseInt(valor_2);
    var totalestudiantes= resultado1+resultado2;
    var porcentaje1 = resultado1/(totalestudiantes*.01);
    var porcentaje2 = resultado2/(totalestudiantes*.01);
    
    document.formulario.resultado.value=porcentaje1+"%";
    document.formulario.resultado2.value=porcentaje2+"%";
}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.cantidad2.value="";
    document.formulario.resultado2.value="";
    document.formulario.resultado.value="";
}