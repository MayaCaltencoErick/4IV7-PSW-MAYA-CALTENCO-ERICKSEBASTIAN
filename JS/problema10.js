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
    
    
    var resultado1 = parseFloat(valor_1);
    var resultado2 = parseFloat(valor_2);
    
    if(resultado2>0.9){
        if(resultado2>1.9){

            if(resultado2>4.9){
                if(resultado2>9.9){
                    document.formulario.resultado.value=resultado1+resultado1*0.2+"$" 
                }
                else{
                    document.formulario.resultado.value=resultado1+resultado1*0.15+"$" 
                }
            }
            else{
                document.formulario.resultado.value=resultado1+resultado1*0.1+"$"   
            }  
        } 
        else{
            document.formulario.resultado.value=resultado1+resultado1*0.07+"$"
        }
        
    }

    else{
        document.formulario.resultado.value=resultado1+resultado1*0.05+"$"
    }
    
    
    
    
}

function borrar(){
    document.formulario.cantidad.value="";
    document.formulario.cantidad2.value="";
   
    document.formulario.resultado.value="";
}