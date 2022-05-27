const { DataTypes } = require('sequelize');
const { db } = require('..');

const Categorias = db.define(
  'categorias',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    categoria: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'categorias',
    timestamps: false,
  }
);

module.exports = Categorias;