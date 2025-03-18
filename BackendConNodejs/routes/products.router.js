const express = require('express');
const ProductService = require('../services/product.service')

const router = express.Router();
const service = new ProductService();

router.get('/filter', async (req, res) => {
  try {
    res.send('Este es un filter')
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    //res.status(404).json({ message: 'Error en la consulta'})
    next(error)
  }
})

router.get('/', async (req, res) => {
  try {
    const products = await service.find();
    res.json(products)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})



router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const  newProduct = await service.create(body);
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body)
    res.status(201).json(product)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
})


module.exports = router;

