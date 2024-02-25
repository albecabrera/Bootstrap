// // // function saludoInicial(name="David"){
// // //     document.write(`Hola, mi nombre es §{name}<br>`);
// // // }

// // // saludoInicial("Steve");
// // // saludoInicial();


// // function sumarNumeros(a, b){
// //     let c = 1;
// //     let suma = a + b + c;
// //     c = 5;
// //     document.write(suma + "<br>");
// // }

// // sumarNumeros(8, 30);
// // document.write(c);



// let usuario = {
//  nombre: "David",
//  edad: 28,
//  estudiante: true
// }

// console.log(usuario);
// console.log(usuario.nombre);
// console.log(usuario.edad);
// console.log(usuario.estudiante);

// usuario.carrera = 'Ingeniería';
// console.log(usuario);

// delete usuario.edad;
// console.log(usuario);
// console.log(usuario.hasOwnProperty('nombre'));

let disco1 ={
    artist: 'Radiohead',
    album: 'Currents',
    year: 2015
}

function Disco(artist, album, year)
{
    this.artist = artist;
    this.album = album;
    this.year = year;
}

let disco3 = new Disco('Beach House', 'Bloom', 2012);
console.log(disco3);

let disco4 = new Disco('Radiohead', 'OK Computer', 1997);
console.log(disco4);