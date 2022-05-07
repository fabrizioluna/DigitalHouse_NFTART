const { DataTypes } = require('sequelize');
const { db } = require('..');

const Autores = db.define('autores',
    {   
        id_autor:{
            type:DataTypes.INTEGER,
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
