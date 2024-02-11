// Acá el juego selecciona un número al azar para que adivines
let numeroAzar = Math.floor(Math.random() * 100) + 1

let numeroDeEntrada = document.getElementById("numeroDeEntrada")
let mensaje = document.getElementById("mensaje")


// Esta acción se va a ejecutar cuando se toque el botón chequear
function chequearResultado() {
    let numeroIngresado = parseInt(numeroDeEntrada.value);

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = "Por favor, introduce un número válido entre 1 y 100";
        mensaje.style.color = "red";
        return
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = "¡Felicitaciones, has adivinado el número!";
        mensaje.style.color = "green";
        numeroDeEntrada.disabled = true;
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = "¡Más alto! El número es mayor al que dijiste";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "¡Más bajo! El número es menor al que dijiste";
        mensaje.style.color = "red";
    }
}
