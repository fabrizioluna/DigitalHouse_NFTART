const { DataTypes } = require('sequelize/types');
const { db } = require('..');

const Medios_de_pago = db.define(
  'medios_de_pago',
  {
    id_medio_de_pago: {
      type: DataTypes.INTEGER,
    },
  },
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
  Medios_de_pago.belongsTo(models, Transacciones, {
    as: 'transacciones',
    foreignKey: 'id_medio_de_pago',
  });
};

module.exports = Medios_de_pago;
