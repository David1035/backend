const express = require('express');
const app = express();
const port = 3000;

app.get('/users', (req, res) => {
  res.send('Lista de usuarios')
})

app.listen(port, () => {
  console.log('Mi port '+ port)
});
