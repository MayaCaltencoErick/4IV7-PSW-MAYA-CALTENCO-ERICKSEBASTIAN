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
    var total= resultado2-resultado1;
    if (resultado2<resultado1){
        alert("El año actual debe de ser mayor al de nacimiento");
        document.formulario.cantidad.value="";
        document.formulario.cantidad2.value="";
    
        document.formulario.resultado.value="";
    }
    else{
        document.formulario.resultado.value=total+"años";  
    }
    
    
}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.cantidad2.value="";
    
    document.formulario.resultado.value="";
}