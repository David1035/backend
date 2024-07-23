
process.on('beforeExit', () =>{
    console.log('El proceso va a terminal')
 })


process.on('exit', () =>{
    console.log('Ale, el proceso acabó')
 })

 /* 
 Después de ejecutare el exit, no se verá nada más, si tenemos más código, ya no se verá
 */



process.on('uncaughtException', (err, origen) => {
    console.log('se me olvidó capturar un error')
    console.error(err.message)
})

funcionQueNoExiste();

/* 
Es muy útil para controlar los errores, e identificarlos
sin romper el código.
*/

