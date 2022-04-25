const { DataTypes } = require('sequelize/types');
const { db } = require('..');

const Autores = db.define(
  'autores',
  {
    autor:{
        type:DataTypes.STRING,
    },
},
{
    tableName: "autores",
    timestamps:false
}
);

module.exports = Autores;
