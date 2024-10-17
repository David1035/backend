/*function saludar (nombre, miCallback) {
    console.log(`hola ${nombre}`)
    miCallback()
    setTimeout(() => {
        miCallback()
    }, 1000)
}

saludar('David', () =>  console.log('este es mi callback'))*/

function registrarUsuario(nombre, callback){
    setTimeout(() => {
        console.log(`registrando usuario ${nombre}`)
        callback()
    }, 1000)
   
}

registrarUsuario('David', () => {
    console.log('usuario registrado')
})