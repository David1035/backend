

function serompe(){
    return 3 + z;
}

function seRompeAsincrona(cb){
    setTimeout(function(){
        // cómo es una función asincrona, debemos ejecutar el try aquí, si lo ejecutamos fuera, como se ejecuta en otro hilo, no lo va a reconocer
        try{
            return 3 + z;
        } catch (err) {
            console.error('fue un error')
            cb(err)
        }
    })
}

// cuando sabemos que algo se rompe  o se puede romper, debemos utilizar el try
try{
    seRompeAsincrona(function (err) {
        console.log('tengo un error prueba')
        console.log(err.message)
    })
} catch(err){
    console.error('Vaya, algo se ha roto...')
    console.error(err.message) // ver el error err, o ver mensaje
    console.log('no pasa nada, se ha capturado')
}




