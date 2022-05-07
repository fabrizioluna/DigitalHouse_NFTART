const { DataTypes } = require('sequelize');
const { db } = require('..');

const Transacciones = db.define(
  'transacciones',
  {
    id_transaccion: {
      type: DataTypes.INTEGER,
    },
    codigo_operacion: {
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
      type: DataTypes.STRING,
    },
    usuario: {
      type: DataTypes.INTEGER,
    },
    tipo_transaccion: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'transacciones',
    timestamps: false,
  }
);

Transacciones.associate = function (models) {
    Transacciones.hasMany(models.Usuarios, {
      as: 'Usuarios',
      foreignKey: 'usuario',
    }),

    Transacciones.belongsToMany(models, nft, {
      as: 'nft',
      through: 'transacciones_nft',
      foreignKey: 'codigo_operacion',
      otherKey: 'codigo_unico',
      timestamps: false,
    }),

    Transacciones.hasMany(models, medios_de_pago, {
      as: 'medios_de_pago',
      foreignKey: 'medio_de_pago',
    });
};

module.exports = Transacciones;
