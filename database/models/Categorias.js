const { DataTypes } = require('sequelize/types');
const { db } = require('..');


const Categorias = db.define(
  'categorias',
  {
    id_categoria: {
      type: DataTypes.INTERGER,
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
