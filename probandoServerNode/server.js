const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/save-name', (req, res) => {
    const name = req.body.name;
    fs.appendFile('names.txt', `${name}\n`, (err) => {
        if (err) {
            console.error('Error saving name:', err);
            res.status(500).send('Server error');
        } else {
            res.send('Nombre guardado correctamente');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
