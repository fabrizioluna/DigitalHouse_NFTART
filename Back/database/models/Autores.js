const { DataTypes } = require('sequelize');
const { db } = require('..');

const Autores = db.define('autores',
    {   
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        autor:{
            type:DataTypes.STRING,
        },
    },

    {
        tableName: "autores",
        timestamps:false
    });

module.exports = Autores;
