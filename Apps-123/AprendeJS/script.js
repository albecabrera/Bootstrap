// usuario ingresa la hora
// el sistema le saluda de acuerdo a las siguientes condiciones:
// hora 6:00 a 12:00 : Buenos días
// hora 13:00 a 18:00 : Buenas tardes
// resto de horas : Buenas noches 

let hora = prompt("Ingresa la hora por favor:");

if (hora >= 6 && hora <= 12) {
    document.write("<h1>👋Buenos días!</h1>");
} else if (hora >= 13 && hora <= 18) {
   document.write("<h1>👋Buenas tardes!</h1>");
} else {
    document.write("<h1>😴Buenas noches!</h1>");
}
