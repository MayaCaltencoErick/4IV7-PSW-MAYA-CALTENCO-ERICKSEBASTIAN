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
    
    
    var resultado1 = parsefloat(valor_1);
    var resultado2 = parseInt(valor_2);
    var auxiliar1 = resultado2-40;
    var auxiliar2 = resultado2-48
    if(resultado2>40){
        if (resultado2>48){
            document.formulario.resultado.value="$"+((resultado2-auxiliar1)+((auxiliar1-auxiliar2)*2)+(auxiliar2*3))*resultado1
        }
        else{
            document.formulario.resultado.value="$"+(resultado2-auxiliar1)+(auxiliar1*2)*resultado1
        }
    }
    if (resultado2<41){
        document.formulario.resultado.value=resultado2*resultado1
    }
    
    
    
    
}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.cantidad2.value="";
    document.formulario.cantidad3.value="";
    document.formulario.resultado.value="";
}