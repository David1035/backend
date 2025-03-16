const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/filter', (req, res) => {
  res.send('Este es un filter')
})

router.get('/', (req, res) => {
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

module.exports = router;

