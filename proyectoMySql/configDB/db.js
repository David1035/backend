import { Sequelize } from "sequelize";

const conectarDB = new Sequelize('database_citas', 'root','',{
    host:'localhost',
    dialect: 'mssql'
});

export default conectarDB;
