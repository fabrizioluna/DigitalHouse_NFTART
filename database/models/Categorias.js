const { DataTypes } = require('sequelize/types');
const { db } = require('..');

const Categorias = db.define(
  'categorias',
  {
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
