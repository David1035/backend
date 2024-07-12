function hola(nombre, miCallback) {
    console.log(`hola, soy una función asíncrona`)
    setTimeout(() => {
        console.log(`hola, ${nombre}`)
        miCallback();
    },3000)
} // realmente no es una función asíncrona, se ejecuta y listo.

function adios (nombre, otroCallback) {
    setTimeout(function(){
         console.log(`adiós, ${nombre}`)
         otroCallback();
    },1000)
}


// hola('David', function(){
//     adios('David', function(){
//         console.log('Terminé la función asíncrona')
//     })
// });

hola('David', function () {})
adios('David', function () {})