const express = require('express');
const db = require('./bd/dataBase');
const cors = require('cors');

// Crear una instancia de Express
const app = express();

// Middleware para parsear JSON y habilitar CORS
app.use(cors());
app.use(express.json());

// Ruta para obtener todos los ejercicios
app.get('/ejercicios', (req, res) => {
    const sql = `SELECT rowid AS id, hora, fecha, observacion, nombre FROM ejercicios`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Lista de ejercicios obtenida con éxito',
            data: rows
        });
    });
});

// Ruta para agregar un nuevo ejercicio
app.post('/ejercicios', (req, res) => {
    const { hora, fecha, observacion, nombre } = req.body;
    if (!hora || !fecha || !observacion || !nombre) {
        res.status(400).json({ error: 'Por favor, ingrese todos los campos: hora, fecha, observación, nombre' });
        return;
    }

    const sql = `INSERT INTO ejercicios (hora, fecha, observacion, nombre) VALUES (?, ?, ?, ?)`;
    db.run(sql, [hora, fecha, observacion, nombre], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'Ejercicio agregado exitosamente',
            data: { id: this.lastID, hora, fecha, observacion, nombre }
        });
    });
});

// Ruta para eliminar un ejercicio por ID
app.delete('/ejercicios/:id', (req, res) => {
    const sql = `DELETE FROM ejercicios WHERE rowid = ?`;
    const id = req.params.id;

    db.run(sql, id, function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            res.status(404).json({ error: 'Ejercicio no encontrado' });
        } else {
            res.json({ message: 'Ejercicio eliminado exitosamente' });
        }
    });
});

// Activar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
