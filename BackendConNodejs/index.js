const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;


app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset) {
    res.json({ limit, offset})
  } else {
    res.json({message: 'No hay parámetros'})
  }
})

app.get('/products', (req, res) => {
  const { size } = req.query;
  const limit = size || 5;
  const productos = [];
  for (let index = 0; index < limit; index++) {
    productos.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    })
  }
  res.json(productos)
})

app.listen(port, () => {
  console.log('Mi port '+ port)
});




