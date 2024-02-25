function saludo (nombre){
    console.log(`hola ${nombre}, buenos días`);
}

setTimeout(saludo, 2000, 'Alberto');

//setInterval - ejecuta la misma función cada cierto tiempo

let numero = 5;
function conteo(){
    console.log(`lanzamiento en ${numero} segundos`);
    numero--;
}
        setTimeout(conteo, 1000);
    
