// forma principal de traer un módulo a js
const fs = require('fs'); // nos permite acceder a archivos, modificarlos, leerlos, realizar un grabado a disco file system

function leer(ruta,cb) {
    fs.readFile(ruta, (err, data) => {
        //leído
        console.log(data.toString())
    })
}

leer(__dirname + '/archivo.txt')