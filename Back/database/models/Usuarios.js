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
    nombre_usuario: {
      type: DataTypes.STRING,
    },
    usuario: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    contrasenia: {
      type: DataTypes.STRING,
    },
    fecha_nacimiento: {
      type: DataTypes.DATE,
    },
    tipo_usuarios: {
      type: DataTypes.DECIMAL,
    },
    usuario_creador: {
      type: DataTypes.STRING,
    },
    pais:{
      type: DataTypes.STRING
    },
    imagen:{
      type: DataTypes.STRING
    },
  },
  {
    tableName: 'usuarios',
    timestamps: false,
  }
);

Usuarios.associate = function (models) {
  // Relacion nft
  Usuarios.belongsTo(models.nft,{
    as: "nft",
    foreignKey: "usuario_creador",
  });

  Usuarios.belongsTo(models.Transacciones, {
    as: 'transacciones',
    foreignKey: 'id',
  });
};

module.exports = Usuarios;
