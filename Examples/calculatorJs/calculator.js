/* Se asigna a la variable result el id de la pantalla */
let result = document.getElementById("pantalla"); //

/**
 toma un dato del boton pulsa y lo agrega al valor del resultado en pantalla
 number es cualquiera de los valores de los botones
 */
let calculate=(number)=>{ //
    result.value = result.value + number; //incrementa el número
}

function poten2(){
    result.value = Math.pow(result.value, 2);
}

function poten3(){
    result.value = Math.pow(result.value, 3);
}

function raiz(){
    result.value = Math.sqrt(result.value);
}

function borrar() {
    /* resta el ultimo número o caracter pulsado en pantalla */
    result.value = result.value.slice(0, -1); //no borra los primeros valores
}

// operaciones matematicas
let igual=()=>{
    /*valida posibles errores */
    try{
        result.value = eval(result.value)        
    }
    catch(err){
        alert("Pulse de manera correcta los valores.")
    }
}

function eliminar(){
    result.value = " ";
}

