const express = require('express');
const conectarDB = require('../configdb/db');
const cors = require('cors');

const app = express();
const port = 5000;

//llamamos a nuestra funcion conectarDB

conectarDB();
app.use(cors());
app.use(express.json());

//rutas del proyecto
app.use('/api/clientes', require('../routes/clientesRutas'))
app.use('/api/proveedores', require('../routes/proveedoresRutas'))


// RUTA DESDE LA WEB

app.get('/', (req, res) => {
    res.send('Bienvenidos estamos conectados')
})

app.listen(port, () => console.log('Estamos conectados desde el servidor'))

