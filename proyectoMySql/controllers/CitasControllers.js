import Citas from "../models/Citas.js";

// metodos o funciones CRUD

// funciones o método mostrar todas las citas
export const getAllCitas = async (req, res) => {
    try {
        const citas = await Citas.findAll();
        res.json(citas);
    } catch (error) {
        res.json({msg: error.message})
    }
}

// funciones o método mostrar una cita
export const getCita = async (req, res) => {
    try {
        const cita = await Citas.findAll({
            where:{id:req.params.id}
        });
        res.json(cita[0]);
    } catch (error) {
        res.json({msg: error.message})
    }
}

// funciones o método agregar cita
export const agregarCitas = async (req, res) => {
    try {
        await Citas.create(req.body);
        res.json({msg: 'se agrego una cita'})

    } catch (error) {
        res.json({msg: error.message})
    }
}

// funciones modificar cita
export const modificarCita = async (req, res) => {
    try {
        await Citas.update(req.body, {
            where:{id:req.params.id}
        });
        res.json({msg: 'se modifica una cita'})
        
    } catch (error) {
        res.json({msg: error.message})
    }
}

// funciones eliminar cita
export const eliminarCita = async (req, res) => {
    try {
        await Citas.destroy({
            where:{id: req.params.id}
        });
        res.json({msg: 'se elimino una cita'})
        
    } catch (error) {
        res.json({msg: error.message})
    }
}