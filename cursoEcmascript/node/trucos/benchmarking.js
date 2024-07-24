let suma = 0;
console.time('bucle') // inicia a ver cuanto tarda la ejeción

for (let i = 0; i < 100000000; i++){
    suma += 1
}

// ver cuando tiempo tarda algo. 
console.timeEnd('bucle') // termina de ver cuando termina de ejecutar y cuanto tarda

console.time('asincrono')
asincrona()
    .then( () => {
        console.timeEnd('asincrono')
    })
function asincrona(){
    return new Promise( (resolve) => {
        setTimeout(function () {
            console.log('termina el proceso asincrono')
            resolve()
        })
    })
}

