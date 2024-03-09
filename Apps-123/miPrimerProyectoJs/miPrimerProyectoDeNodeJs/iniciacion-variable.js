// Definir variables
var variable;
let variableLet;

const constante = "Hola soy una constante";
console.log(constante);

var a = 1;
console.log(a);

a = 4;
console.log(a);

let b = 2;
console.log(b);
b = 5;
console.log(b);

var variable = "Hola soy una variable VAR";

for (let i = 0; i < 2; i++) {
  console.log("Hola soy un bucle");
}

let variableLet = "Hola soy una variable LET";

for (var i = 0; i < 3; i++) {
  let variableLet = "Hola soy una variable LET";
}

console.log(typeof variableLet);
