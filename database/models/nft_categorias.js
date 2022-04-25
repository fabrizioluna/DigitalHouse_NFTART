const { DataTypes } = require('sequelize/types');
const { db } = require('..');

const Nft_categorias = db.define(
  'nft_categorias',
  {
    categoria: {
      type: DataTypes.STRING,
    },
    nombre_nft: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'medios_de_pago',
    timestamps: false,
  }
);

module.exports = Nft_categorias;
