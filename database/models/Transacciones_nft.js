const { DataTypes } = require('sequelize');
const { db } = require('..');


const Transacciones_nft = db.define(
  'transacciones_nft',
  {
    id: {
      type: DataTypes.INTERGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo_operacion: {
      type: DataTypes.INTERGER,
    },
    codigo_unico: {
      type: DataTypes.INTERGER,
    },
  },
  {
    tableName: 'transacciones_nft',
    timestamps: false,
  }
);

transacciones_nft.associate = function (models) {
    // Relacion transacciones
    transacciones_nft.hasMany(models, transacciones, {
      as: 'transacciones',
      foreignKey: 'codigo_operacion',
      }),

    // Relacion NFT
    transacciones_nft.hasMany(models, nft, {
      as: 'nft',
      foreignKey: 'codigo_unico',
    })};

module.exports = Transacciones_nft;
