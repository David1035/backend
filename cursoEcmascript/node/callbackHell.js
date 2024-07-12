function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log(`hola, ${nombre}`)
        miCallback();
    },3000)
} // realmente no es una función asíncrona, se ejecuta y listo.

function hablar (callbackhablar) {
    setTimeout(function () {
        console.log('Bla bla bla...')
        callbackhablar()
    }, 1000);
}



function adios (nombre, otroCallback) {
    setTimeout(function(){
         console.log(`adiós, ${nombre}`)
         otroCallback();
    },1000)
}

function conversacion(nombre, veces, callback){
    // recursividad, llamar a la misma función con información diferente
    if(veces >= 0){
        hablar(function(){
        conversacion(nombre, --veces, callback);
        })
    }else{
        adios(nombre, callback);
    }
    
}

console.log('Iniciando proceso');
hola('David', function(){
    conversacion('David', 3, function(){
        console.log('Proceso terminado')
    })
})

// hola('David', function(){
//     hablar(function() {
//         hablar(function() {
//             adios('David', function(){
//                 console.log('Terminé la función asíncrona')
//             })
//         })
//     })
    
// });
function safeRecursion(counter) {
    if (counter <= 0) return; // Condición de parada
    console.log(counter);
    safeRecursion(counter - 1);
  }
  
  safeRecursion(10);