const { DataTypes } = require('sequelize');
const { db } = require('..');

const Nft = db.define(
  'nft',
  {
    nombre_nft: {
      type: DataTypes.STRING,
    },
    categoria: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    precio_actual_usd: {
      type: DataTypes.FLOAT,
    },
    precio_actual_eth: {
      type: DataTypes.FLOAT,
    },
    autor: {
      type: DataTypes.INTEGER,
    },
    tematica: {
      type: DataTypes.STRING,
    },
    imagen: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'nft',
    timestamps: false,
  }
);

Nft.associate = function (models) {
  nft.belonsToMany(models, Transacciones, {
    as: 'Transacciones',
    trough: 'Transacciones_nft',
    foreignKey: 'id',
    otherKey: 'if',
    timestamps: false,
  });
};

module.exports = Nft;
