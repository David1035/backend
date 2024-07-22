// forma principal de traer un módulo a js
const fs = require('fs'); // nos permite acceder a archivos, modificarlos, leerlos, realizar un grabado a disco file system

function leer(ruta,cb) {
    fs.readFile(ruta, (err, data) => {
        //leído
        cb(data.toString())
    })
}

//leer(__dirname + '/archivo.txt', console.log)

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.log(`No he podido escribirlo ${err}`)
        }else{
            console.log('Se escribió correctamente')
        }
    })
}
escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo')
leer(__dirname + '/archivo.txt', console.log)

// funcion para borrar 
function borrar (ruta, cb){
    fs.unlink(ruta, cb)
}
borrar(__dirname + '/archivo1.txt', console.log)
