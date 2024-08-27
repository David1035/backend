import conectarDB from '../configDB/db.js';
import { DataTypes } from 'sequelize';

const Citas = conectarDB.define('citas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
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
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,  // Asigna automáticamente la fecha actual en el formato adecuado
        get() {
            return this.getDataValue('createdAt').toLocaleString();  // Muestra en un formato más legible
        }
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,  // Asigna automáticamente la fecha actual en el formato adecuado
        get() {
            return this.getDataValue('updatedAt').toLocaleString();  // Muestra en un formato más legible
        }
    }

})

export default Citas;