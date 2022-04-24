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
    fecha_nacimiento: {
      type: DataTypes.DATE,
    },
    tipo_usuarios:{
      type: DataTypes.DECIMAL
    }
  };
  const config = {
    tableName: 'Usuarios',
    timestamps: false,
  };
  let Usuarios = sequelize.define(alias, columnas, config);

  Usuarios.associate = function(models) {
    Usuarios.hasMany(models.Transacciones,{
        as:"Transacciones",
        foreignKey: "id"
    })
}

  return Usuarios;
};
