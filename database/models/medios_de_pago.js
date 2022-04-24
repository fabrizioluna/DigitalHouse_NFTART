module.exports = (sequelize, DataTypes) => {
  const alias = 'medios_de_pago';

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
  let medios_de_pago = sequelize.define(alias, columnas, config);
    
    medios_de_pago.associate = function(models){
      medios_de_paho.hasMany(models,Transacciones,{
        as:"Transacciones",
        foreignKey: "id",
      })
    }
    
  return medios_de_pago;
};
