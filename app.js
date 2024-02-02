let numeroSecreto = 0; 
let contador = 0;
let numerosSorteados = [];
let numeroMaximo = 10;


 
 function asignarTextoElemento(elemento, texto){
     let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function deleteAttribute(id, atributo) {
    document.getElementById(id).removeAttribute(atributo);
}


 function verificarIntento(){
     let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);


     
     if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Felicidades, Haz acertado el número, en ${contador} ${contador==1 ? 'intento' : 'intentos' }`);

         //document.getElementById('reiniciar').removeAttribute('disabled');
         deleteAttribute('reiniciar','disabled');
        
     }
     else{

        if(numeroDeUsuario<numeroSecreto){
            asignarTextoElemento('p', `No haz acertado el número, el número es mayor, llevas ${contador} intentos`);

            
        }
        else{
            asignarTextoElemento('p', 'No haz acertado el número, el número es menor');
        }
        contador++;
        limpiar();
     }

     if(contador==3){
        asignarTextoElemento('p', 'Ya haz usado el máximo de 3 intentos')
        deleteAttribute('reiniciar','disabled');
    }
     return;
}

function limpiar(){
    document.querySelector('#ValorUsuario').value = '';

}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*numeroMaximo)+1;

    //Si ya sorteamos todos lo números
    if(numerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números');
    } else{
        //Si el número generado está incluido en la lista

        if (numerosSorteados.includes(numeroSecreto)){
            return generarNumeroSecreto();
        }

        else{
            numerosSorteados.push(numeroSecreto);
            return numeroSecreto;
        }

}

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'juego del calamar');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    contador = 1;
    
}
console.log(numeroSecreto);
function reiniciarJuego(){
    //limpiar la caja
    limpiar();
    //Indicar el mensaje de intervalo de números
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();



