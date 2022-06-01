const { DataTypes } = require('sequelize');
const { db } = require('..');

const Usuarios = db.define(
  'usuarios',
  {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey:true,
      autoIncrement:true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    usuario: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    contrasenia: {
      type: DataTypes.TEXT,
    },
    fecha_nacimiento: {
      type: DataTypes.DATE,
    },
    tipo_usuarios: {
      type: DataTypes.DECIMAL,
    },
    pais:{
      type: DataTypes.STRING
    },
    imagen:{
      type: DataTypes.STRING
    },
    descripcion:{
      type: DataTypes.TEXT
    },
  },
  {
    tableName: 'usuarios',
    timestamps: false,
  }
);

module.exports = Usuarios;