import conectarDB from '../configDB/db.js';
import { DataTypes } from 'sequelize';

const Citas = conectarDB.define('citas', {
    n_medico:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    especialidad:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    fecha:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    duracion:
    {
        type: DataTypes.STRING,
        allowNull: false
    }

})

export default Citas;