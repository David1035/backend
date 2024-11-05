// Importar el módulo sqlite3
const sqlite3 = require('sqlite3').verbose();

//crear o abrir la conexión con la base de datos dbEjercio.db
const db = new sqlite3.Database('bdEjercicio.db', (err) => {
    if(err) {
        console.error('No fue posible establecer conexión con la BD', err.message)
    } else {
        console.log('Conexión exitosa a la bade de datos bdEjercicio.db')
    }
})

module.exports = db;