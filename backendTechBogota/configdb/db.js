const mongoose = require('mongoose');
require('dotenv').config();

//funcion conexion base de datos

const conectarDB = () => {
    mongoose
    .connect(process.env.BD_MONGO)
}
