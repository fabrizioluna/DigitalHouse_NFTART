const { DataTypes } = require('sequelize/types');
const { db } = require('..');

const Autores = db.define('autores',
    {   
        id_autor:{
            type:DataTypes.INTERGER,
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
