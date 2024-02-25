// Clase

class Player{
    constructor(nombre, colorSombrero){
        this._nombre = nombre;
        this._colorSombrero = colorSombrero;
    }
    saltar(){}
    correr(){}
    saludar(){
    return `Hola soy §{this._nombre} y mi sombrero es ${this._colorSombrero}`;
    }

    get nombre(){
        return this._nombre;
    }
    set cambiarNombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

    }


let player1 = new Player('MARIO', 'ROJO');
let player2 = new Player('LUIGI', 'VERDE');

console.log(player1); 
console.log(player2); 

 console.log(player1.saludar());
 console.log(player2.saludar());

 //Creación de una SUBCLASE

 class Pet extends Player {
    constructor(nombre, colorSombrero, colorPiel){
        super(nombre, colorSombrero);
        this._colorPiel = colorPiel;
    }
    get colorPiel(){
        return this._colorPiel;
    }
    set colorPiel(nuevoColorPiel){
        this._colorPiel = nuevoColorPiel;
    }
 }

 let pet1 = new Pet('Yoshi', 'Invisible', 'Verde');
 console.log(pet1);

 console.log(pet1.nombre);
