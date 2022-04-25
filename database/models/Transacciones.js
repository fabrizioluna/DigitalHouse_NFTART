const { DataTypes } = require('sequelize/types');
const { db } = require('..');

const Transacciones = db.define(
  'transacciones',
  {
    operaciones: {
      type: DataTypes.STRING,
    },
    valor_usd: {
      type: DataTypes.DECIMAL,
    },
    valor_eth: {
      type: DataTypes.DECIMAL,
    },
    fecha: {
      type: DataTypes.DATE,
    },
    medio_de_pago: {
      type: DataTypes.INTEGER,
    },
    usuario: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'transacciones',
    timestamps: false,
  }
);

Transacciones.associate = function (models) {
  Transacciones.belongsTo(models.Usuarios, {
    as: 'Usuarios',
    foreignKey: 'id',
  }),
    Transacciones.belongsToMany(models, nft, {
      as: 'nft',
      through: 'Transacciones_nft',
      foreignKey: 'id',
      otherKey: 'id',
      timestamps: false,
    }),
    Transacciones.belongTo(models, medios_de_pago, {
      as: 'medios_de_pago',
      foreignKey: 'id',
    });
};

module.exports = Transacciones;
