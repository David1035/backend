const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Conexión a la base de datos en disco
const db = new sqlite3.Database(path.join(__dirname, 'contacts.db'));

// Creación de la tabla si no existe
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS contacts (name TEXT, phone TEXT)");
});

// Ruta para guardar el contacto
app.post('/save-contact', (req, res) => {
    const { name, phone } = req.body;
    db.run(`INSERT INTO contacts (name, phone) VALUES (?, ?)`, [name, phone], (err) => {
        if (err) {
            console.error('Error al guardar el archivo:', err.message);
            return res.status(500).send('Error al guardar el archivo');
        }
        res.send('Contact saved successfully');
    });
});

// Ruta para consultar y mostrar los datos
app.get('/view-contacts', (req, res) => {
    db.all("SELECT name, phone FROM contacts", [], (err, rows) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err.message);
            return res.status(500).send('Error al consultar la base de datos');
        }
        
        let html = '<h1>Contacts</h1><ul>';
        rows.forEach((row) => {
            html += `<li>${row.name} - ${row.phone}</li>`;
        });
        html += '</ul>';
        
        res.send(html);
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


