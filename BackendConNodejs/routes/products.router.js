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



router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({ message: "created",
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({ message: "created",
    data: body,
    id,
  })
})
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: "Delete",
    id,
  })
})


module.exports = router;

