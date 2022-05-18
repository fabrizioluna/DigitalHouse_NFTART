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
Categorias.associate = function (models) {
  Categorias.belongsTo(models, nft_categorias, {
  as: 'categorias',
  foreignKey: 'categoria',
  })};

module.exports = Categorias;
