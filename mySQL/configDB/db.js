import { Sequelize } from "sequelize";

const conectarDB = new Sequelize({
    dialect: 'sqlite',
    storage: './clientes.db'

});

export default conectarDB;
