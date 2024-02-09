// esto agregar a la pantalla el valor del btón de la calculadora al presionarlo

function agregar(valor){
    document.getElementById('pantalla').value += valor
}

// Esta accion borra la pantalla
function borrar(){
    document.getElementById('pantalla').value = ""
}

// Esta accion calcula el resultado
function calcular () {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval (valorPantalla)
    document.getElementById('pantalla').value = resultado
}