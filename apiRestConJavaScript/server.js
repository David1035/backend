const express = require('express')
const cors = require('cors');
const path = require('path');

const server = express()
const port = 3000;

server.use(cors())

server.use(express.static(path.join(__dirname, 'public')));

server.listen(port, () => {
    console.log(`Server online in http://localhost:${port}`)
})