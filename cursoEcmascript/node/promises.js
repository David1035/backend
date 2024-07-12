function hola(nombre) {
    return new Promise(function(resolve, reject){
            setTimeout(() => {
            console.log(`hola, ${nombre}`)
            reject('Hay un error');
        },1000)
    });
    
} // realmente no es una función asíncrona, se ejecuta y listo.

function hablar (nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Bla bla bla...')
            resolve()
        }, 1000);
    })
    
}



function adios(nombre) {
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log(`adiós, ${nombre}`)
            resolve();
       },1000)
    })
}

//---
console.log('hola, empezando proceso')
hola('Davids')
    .then(hablar('Davids'))
    .then(adios('David'))
    .then((nombre) => {
        console.log('comenzando a hablar...')
    })
    .catch(error => {
        console.log('error', error)
    })