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
    var valor_3= document.formulario.cantidad3.value;
    var resultado1 = parseInt(valor_1);
    var resultado2 = parseInt(valor_2);
    var resultado3= parseInt(valor_3)
    var calificacion = ((resultado1)*.55)+((resultado2)*.3)+((resultado3*.15));
    
    document.formulario.resultado.value=calificacion;
}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.cantidad2.value="";
    document.formulario.cantidad3.value="";
    document.formulario.resultado.value="";
}