// para importar la librería
// exec nos permite ejecutar un proceso hijo por debajo del código.

const { exec, spawn } = require('child_process')

/*exec('ls -la', (err, stdout, sterr) => {
    if(err){
        console.error(err)
        return false;
    }
    console.log(stdout)
}) */

// spawn para invocar un proceso nuevo y ver qué pasa con ese proceso

let proceso = spawn('ls', ['-la']);
//console.log(proceso) // para saber cosas del proceso
console.log(proceso.pid)
console.log(proceso.connected)

//También podemos escuchar lo que pasa
proceso.stdout.on('data', function(dato){
    console.log(dato.toString())
})

//derectar cuando ha terminado el proceso
proceso.on('exit', function(){
    console.log('El proceso terminó')
    console.log('El proceso está muerto?', proceso.killed)
})
