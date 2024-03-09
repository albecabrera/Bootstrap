// Listas, array o arreglo
const lista1 = [1, "hola", true, undefined, null];
const lista2 = new Array(2, "hola", true, undefined, null);

console.log(lista1);
console.log(lista2);

// Objetos
const movil = {
  anchura: 5,
  altura: 10,
  marca: "Xiaomi",
  isWhite: false,
  contactos: ["Pedro", "Maria", "Luis"],
  tarjeta: {
    marca: "Samsung",
    almacenamiento: 32,
  },
};

  

console.log(movil.tarjeta.marca);

movil.anyo = 2019;
movil.marca = "Samsung";
console.log(movil.anyo);

// Fechas
// Librerías de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10)
console.log(fecha_milis
  )

  const fecha_cadena = new Date("march 25 2020"); 
  console.log(fecha_cadena)

  const fecha_valores = new Date(2022, 2, 15);
  console.log(fecha_valores)

  const dia = ahora.getDate()
  const mes = ahora.getMonth()
  const anyo = ahora.getFullYear()
