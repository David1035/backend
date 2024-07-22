let i = 0;
let intervalo = setInterval(function(){
    console.log('hola');
    if(i === 3){
        clearInterval(intervalo)
    }
    i++
}, 2000)
setImmediate(function(){
    console.log('hola, inmediata ejecución')
})

// sistema de módulos, agregar en cualquier sitio
//requiere() // se puede utilizar en cualquier sitio

console.log(__filename)  //para ver las variables de entorno
console.log(__dirname) //ver el directorio

globalThis.miVariable = 'elvalor'
console.log(miVariable) // no crear variables globales, a menos que sea extricto-. 
