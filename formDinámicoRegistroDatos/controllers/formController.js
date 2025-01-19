const Form = require('../models/Form')

// consultar todos los registros 
const getAllForm = async (req, res) => {
    try {
        const forms = await Form.findAll();
        res.json(forms)
    } catch (error) {
        res.status(500).json({ message: 'Error al consultar todos los registros'})
    }
}

// Crear un registro
const createForm = async (req, res) => {
    try {
        const form = await Form.create(req.body);
        res.status(201).json(form)
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el registro'})
    }
}

// Obtener un registro por ID
const getFormById = async (req, res) => {
    try {
        const form = await Form.findByPk(req.params.id)
        if(!form) return res.status(404).json({ message: 'Registro no encontrado' })
        res.json(form)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el registro' })
    }
}

//Actualiar un registro por ID
const updateForm = async (req, res) => {
    try {
        const form = await Form.findByPk(req.params.id)
        if(!form) return res.status(404).json({ message: 'Error al actualizar el registro'})
        await form.update(req.body)
        res.json(form)
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el registro'})
    }
}

//Eliminar un registro por ID
const deleteForm = async (req, res) => {
    try {
        const form = await Form.findByPk(req.params.id)
        if(!form) return res.status(404).json({ message: 'Registro no encontrado'})
        await form.destroy()
        res.json({ message: 'Registro eliminado con éxito' })
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el registro'})
    }
}

module.exports = { getAllForm, createForm, getFormById, updateForm, deleteForm }
// explicar código 