const { DataTypes } = require('sequelize/types');
const { db } = require('..');

const Nft_actuales = db.define(
  'nft_actuales',
  {
    usuario: {
      type: DataTypes.INTERGER,
    },
    nombre_nft: {
      type: DataTypes.INTERGER,
    },
  },
  {
    tableName: 'nft_actuales',
    timestamps: false,
  }
);

module.exports = Nft_actuales;
