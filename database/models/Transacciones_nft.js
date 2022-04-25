const { DataTypes } = require('sequelize');
const { db } = require('..');

const Transacciones_nft = db.define(
  'Transacciones_nft',
  {
    id: {
      type: DataTypes.INTERGER,
      primaryKey: true,
      autoIncrement: true,
    },
    operacion: {
      type: DataTypes.INTERGER,
    },
    nombre_nft: {
      type: DataTypes.INTERGER,
    },
  },
  {
    tableName: 'transacciones_nft',
    timestamps: false,
  }
);

nft.associate = function (models) {
  nft.belonsToMany(models, Transacciones, {
    as: 'Transacciones',
    trough: 'Transacciones_nft',
    foreignKey: 'id',
    otherKey: 'if',
    timestamps: false,
  });
};

module.exports = Transacciones_nft;
