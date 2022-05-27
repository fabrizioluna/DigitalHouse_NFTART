const { DataTypes } = require('sequelize');
const { db } = require('..');
const Usuarios = require('./Usuarios');
const Autores = require('./Autores');
const Categorias = require('./Categorias');
// const TransaccionesNft = require('./Transacciones_nft');


const nft = db.define(
  'nft',
  {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    creador: {
      type: DataTypes.INTEGER,
    },
    nombre_nft: {
      type: DataTypes.STRING,
    },
    categoria: {
      type: DataTypes.INTEGER,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
    precio_actual_usd: {
      type: DataTypes.DECIMAL(20, 1),
    },
    precio_actual_eth: {
      type: DataTypes.DECIMAL(20, 1),
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
    codigo_unico: {
      type: DataTypes.INTEGER,
    },
  },

  {
    tableName: 'nft',
    timestamps: false,
  }
);

// Relación Usuarios
nft.belongsTo(Usuarios, {foreignKey: "creador", as: "Creador"});
Usuarios.hasMany(nft, {foreignKey: "creador", as: "Creador"});

// Relación Autores
nft.belongsTo(Autores,{foreignKey: "autor", as: "Autor"});
Autores.hasMany(nft,{foreignKey:"autor", as: "Autor"})

// Relación Categorias
nft.belongsTo(Categorias, {foreignKey: "categoria", as: "Categoria"});
Categorias.hasMany(nft, {foreignKey: "categoria", as: "Categoria"});


//   // Relación Transacciones
//   nft.belongsToMany(models.transacciones, {
//     as: 'transacciones',
//     through: 'transacciones_nft',
//     foreignKey: 'codigo_unico',
//     otherKey: 'codigo_operacion',
//   });


module.exports = nft
