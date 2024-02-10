// Puede entrar esta persona al gimnasio deportivo?

let edadPersona = 25

if(edadPersona >= 18 && edadPersona <= 80){
    console.log("Puede entrar al Gimnasio")
}
else if(edadPersona <=18){
    console.log("No puede entrar al Gimnasio porque eres menor de edad")
}
else{
    console.log("No puede entrar al Gimnasio porque eres mayor de 80 y no se recomienda")
}