let numeroDia = prompt ('Ingresa el día de la semana:');

switch (numeroDia){
    case '1':
        document.write('<h1>El día de hoy es<br>LUNES</h1>');
        break;

    case '2':
        document.write('<h1>El día de hoy es<br>MARTES</h1>');
        break;

    case '3':
        document.write('<h1>El día de hoy es<br>MIERCOLES</h1>');
        break;
    
    case '4':
        document.write('<h1>El día de hoy es<br>JUEVES</h1>');
        break;
    
    case '5':
        document.write('<h1>El día de hoy es<br>VIERNES</h1>');
        break;
   
    case '6':
        document.write('<h1>El día de hoy es<br>SABADO</h1>');
        break;

   case '7':
        document.write('<h1>El día de hoy es<br>DOMINGO</h1>');
        break;
    
    default:
        document.write('<h1>Día desconocido</h1>');
}

