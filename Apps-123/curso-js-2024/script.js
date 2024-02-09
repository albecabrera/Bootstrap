// APRENDIENDO JAVASCRIPT

const temperatura = 76
function transformarACelcius(fahrenheit){
   return (5/9) * (fahrenheit - 32)
}

const respuesta = transformarACelcius(temperatura);

console.log(`La respuesta en grados celcius es de`, respuesta); 
