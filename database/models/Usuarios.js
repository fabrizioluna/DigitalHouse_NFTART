module.exports = function (sequelize, DataTypes) {
  const alias = 'Usuarios';

  const columnas = {
    id: {
      type: DataTypes.INTERGER,
      primaryKey: true,
      autoIncrement: true,
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
    nft_vendedor: {
      type: DataTypes.DECIMAL,
    },
    nft_compras: {
      type: DataTypes.DECIMAL,
    },
    nft_actuales: {
      type: DataTypes.DECIMAL,
    },
    fecha_nacimiento: {
      type: DataTypes.DATE,
    },
  };
  const config = {
    tableName: 'Usuarios',
    timestamps: false,
  };
  let Usuarios = sequelize.define(alias, columnas, config);
  return Usuarios;
};
