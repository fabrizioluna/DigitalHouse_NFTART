const { DataTypes } = require('sequelize/types');
const { db } = require('..');

const Medios_de_pago = db.define(
  'medios_de_pago',
  {
    medio_de_pago: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'medios_de_pago',
    timestamps: false,
  }
);

Medios_de_pago.associate = function (models) {
  Medios_de_pago.hasMany(models, Transacciones, {
    as: 'Transacciones',
    foreignKey: 'id',
  });
};

module.exports = Medios_de_pago;
