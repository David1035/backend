import express from 'express';
import { getAllCitas, getCita, agregarCitas, modificarCita, eliminarCita } from '../controllers/CitasControllers.js';

const router = express.Router();

// Rutas de los métodos CRUD
router.get('/', getAllCitas);
router.get('/:id', getCita);
router.post('/', agregarCitas);
router.put('/:id', modificarCita);
router.delete('/:id', eliminarCita);


export default router;