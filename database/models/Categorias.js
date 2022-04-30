const { DataTypes } = require('sequelize');
const { db } = require('..');


const Categorias = db.define(
  'categorias',
  {
    id_categoria: {
      type: DataTypes.INTEGER,
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
Categorias.associate = function (models) {
  Categorias.belongsTo(models, nft_categorias, {
  as: 'categorias',
  foreignKey: 'categoria',
  })};

module.exports = Categorias;
