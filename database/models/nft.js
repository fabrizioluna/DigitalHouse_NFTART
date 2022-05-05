const { DataTypes } = require('sequelize');
const { db } = require('..');

const nft = db.define(
  'nft',
  {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    usuario_creador: {
      type: DataTypes.INTEGER,
    },
    nombre_nft: {
      type: DataTypes.STRING,
    },
    categoria: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
    precio_actual_usd: {
      type: DataTypes.DECIMAL,
    },
    precio_actual_eth: {
      type: DataTypes.DECIMAL,
    },
    autor: {
      type: DataTypes.STRING,
    },
    tematica: {
      type: DataTypes.STRING,
    },
    imagen: {
      type: DataTypes.STRING,
    },
    codigo_unico: {
      type: DataTypes.INTEGER,
    },
  },

  {
    tableName: 'nft',
    timestamps: false,
  }
);

nft.associate = function (models) {
  // Relación Usuarios
  nft.hasMany(models.usuarios, {
    as: 'usuarios',
    foreignKey: 'usuario_creador',
  });

  // Relación Autores
  nft.hasMany(models.autores, {
    as: 'autores',
    foreignKey: 'autor',
  });

  // Relación Categorias
  nft.belongsToMany(models.categorias, {
    as: 'categorias',
    through: 'nft_categorias',
    foreignKey: 'nombre_nft',
    otherKey: 'categoria',
  });

  // Relación Transacciones
  nft.belongsToMany(models.transacciones, {
    as: 'transacciones',
    through: 'transacciones_nft',
    foreignKey: 'codigo_unico',
    otherKey: 'codigo_operacion',
  });
};

module.exports = nft;
