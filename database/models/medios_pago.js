module.exports = (sequelize, DataTypes) => {
  const alias = 'medio_pago';

  const columnas = {
    id: {
      type: DataTypes.INTERGER,
      primaryKey: true,
      autoIncrement: true,
    },
    medio_de_pago: {
      type: DataTypes.STRING,
    },
  };
  const config = {
    tableName: 'medios_de_pago',
    timestamps: false,
  };
  let medioPago = sequelize.define(alias, columnas, config);
  return medioPago;
};
