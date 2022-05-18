const { DataTypes } = require('sequelize');
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

Nft_categorias.associate = function (models) {

  // Relacion categorias
  Nft_categorias.hasMany(models, categorias, {
  as: 'categorias',
  foreignKey: 'id_categoria',
  }),
  
  // Relacion NFT
  Nft_categorias.hasMany(models, nft, {
    as: 'nft',
    foreignKey: 'nombre_nft',
  })};

module.exports = Nft_categorias;
