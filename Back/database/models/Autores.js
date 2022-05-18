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

    Autores.associate = function (models) {
        Autores.hasMany(models, Transacciones, {
        as: 'Autores',
        foreignKey: 'autor',
        })};

module.exports = Autores;
