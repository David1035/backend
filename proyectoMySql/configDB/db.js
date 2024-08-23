import { Sequelize } from "sequelize";

const conectarDB = new Sequelize('BDcitas', 'root','',{
    host:'localhost',
    dialect: 'mysql',
});

export default conectarDB;
