// OBJETO DATE
let fechaActual = new Date();
console.log(fechaActual);
console.log(fechaActual.getDate()); //Día actual del mes
console.log(fechaActual.getDay()); //Día actual de la semana
console.log(fechaActual.getMonth()); //Mes actual
console.log(fechaActual.getFullYear()); //Annio actual

//TIMESTAMP: 01 Enero 1970 => Actualidad
console.log(fechaActual.getTime()); //Milisegundos desde el 1-1-1970
console.log(Date.now()); //Milisegundos desde el 1-1-1970
console.log(+fechaActual);

let fechaConTimestamp = new Date(0);
console.log(fechaConTimestamp);

//String
let fechaConString = new Date('2022-01-01');
console.log(fechaConString);

//Date(año, mes, fecha, horas, minutos, segundos, ms)
let fechaConParametros = new Date(2021, 12, 1);
console.log(fechaConParametros);

//Setters
fechaConParametros.setFullYear(1980);
console.log(fechaConParametros);

//EJERCICIO 1: Mostrar la fecha actual con los días de la semana en español con el siguiente formato: Domingo, 25 de julio de 2021

let fecha = new Date();
console.log(fecha.getDay());
console.log(fecha.getDate());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());

let diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
console.log(diaSemana[fecha.getDay()]);
let mesAnyo = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(mesAnyo[fecha.getMonth()]);

console.log('${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAnyo[fecha.getMonth()]} de ${fecha.getFullYear()}');


//EJERCICIO 2: Mostrar la hora actual en formato 03:15:15

let hora = new Data();
console.log(hora.toLocaleTimeString());