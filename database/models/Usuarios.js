const { DataTypes } = require('sequelize/types');
const { db } = require('..');

const Usuarios = db.define(
  'usuarios',
  {
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
  },
  {
    tableName: 'usuarios',
    timestamps: false,
  }
);

Usuarios.associate = function (models) {
  Usuarios.hasMany(models.Transacciones, {
    as: 'Transacciones',
    foreignKey: 'id',
  });
};

module.exports = Usuarios;
