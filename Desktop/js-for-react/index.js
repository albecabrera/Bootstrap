function hello(){
   return function() {
    return 'hola mundo' 
}
}

console.log(hello()())
