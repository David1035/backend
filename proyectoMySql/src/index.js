import express from 'express';
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
})
