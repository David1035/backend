/*import express from 'express';
import cors from 'cors';
import conectarDB from '../configDB/db.js';
import citasRoutes from '../routes/RoutesCitas.js'

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/citas', citasRoutes)

const port = 5000;
//verificamos la conexión a la base de datos
try {
    await conectarDB.authenticate();
    console.log('conexión a la base de datos con éxito')
} catch (error) {
    console.error('tenemos un error al conectar a base de datos', error)
}

app.get('/', (req, res) => {
    res.send('HOLA MUNDO')
})

app.listen(port, () => {
    console.log('El servidor está corriendo en http://localhost:5000/')
})*/

import express from 'express';
import cors from 'cors';
import conectarDB from '../configDB/db.js';
import citasRoutes from '../routes/RoutesCitas.js';

const app = express();
const port = 5000;

// Middleware para parsear JSON y habilitar CORS
app.use(express.json());
app.use(cors());

// Rutas de la API
app.use('/api/citas', citasRoutes);

const startServer = async () => {
    // Verificamos la conexión a la base de datos
    try {
        await conectarDB.authenticate();
        console.log('Conexión a la base de datos con éxito');
    } catch (error) {
        console.error('Tenemos un error al conectar a la base de datos', error);
        process.exit(1);  // Finaliza el proceso si no se puede conectar a la base de datos
    }

    // Inicia el servidor
    app.listen(port, () => {
        console.log(`El servidor está corriendo en http://localhost:${port}/`);
    });
};

// Inicia el servidor
startServer();

app.get('/', (req, res) => {
    res.send('HOLA MUNDO');
});

