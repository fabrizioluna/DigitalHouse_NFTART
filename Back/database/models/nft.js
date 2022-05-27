const { DataTypes } = require('sequelize');
const { db } = require('..');
<<<<<<< HEAD
const Usuarios = require('./Usuarios');
const Autores = require('./Autores');
const Categorias = require('./Categorias');
// const TransaccionesNft = require('./Transacciones_nft');

=======
>>>>>>> ab59042e32d0a074f2570ba1c6c1824c2c6c532b

const nft = db.define(
  'nft',
  {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
<<<<<<< HEAD
    creador: {
=======
    usuario_creador: {
>>>>>>> ab59042e32d0a074f2570ba1c6c1824c2c6c532b
      type: DataTypes.INTEGER,
    },
    nombre_nft: {
      type: DataTypes.STRING,
    },
    categoria: {
<<<<<<< HEAD
      type: DataTypes.INTEGER,
=======
      type: DataTypes.STRING,
>>>>>>> ab59042e32d0a074f2570ba1c6c1824c2c6c532b
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
    precio_actual_usd: {
<<<<<<< HEAD
      type: DataTypes.DECIMAL(20, 1),
    },
    precio_actual_eth: {
      type: DataTypes.DECIMAL(20, 1),
    },
    autor: {
      type: DataTypes.INTEGER,
=======
      type: DataTypes.DECIMAL,
    },
    precio_actual_eth: {
      type: DataTypes.DECIMAL,
    },
    autor: {
      type: DataTypes.STRING,
>>>>>>> ab59042e32d0a074f2570ba1c6c1824c2c6c532b
    },
    tematica: {
      type: DataTypes.STRING,
    },
    imagen: {
      type: DataTypes.STRING,
    },
    codigo_unico: {
      type: DataTypes.INTEGER,
    },
  },

  {
    tableName: 'nft',
    timestamps: false,
  }
);

<<<<<<< HEAD
// Relación Usuarios
nft.belongsTo(Usuarios, {foreignKey: "creador", as: "Creador"});
Usuarios.hasMany(nft, {foreignKey: "creador", as: "Creador"});

// Relación Autores
nft.belongsTo(Autores,{foreignKey: "autor", as: "Autor"});
Autores.hasMany(nft,{foreignKey:"autor", as: "Autor"})

// Relación Categorias
nft.belongsTo(Categorias, {foreignKey: "categoria", as: "Categoria"});
Categorias.hasMany(nft, {foreignKey: "categoria", as: "Categoria"});


//   // Relación Transacciones
//   nft.belongsToMany(models.transacciones, {
//     as: 'transacciones',
//     through: 'transacciones_nft',
//     foreignKey: 'codigo_unico',
//     otherKey: 'codigo_operacion',
//   });


module.exports = nft
=======
nft.associate = function (models) {
  // Relación Usuarios
  nft.hasMany(models.usuarios, {
    as: 'usuarios',
    foreignKey: 'usuario_creador',
  });

  // Relación Autores
  nft.hasMany(models.autores, {
    as: 'autores',
    foreignKey: 'autor',
  });

  // Relación Categorias
  nft.belongsToMany(models.categorias, {
    as: 'categorias',
    through: 'nft_categorias',
    foreignKey: 'nombre_nft',
    otherKey: 'categoria',
  });

  // Relación Transacciones
  nft.belongsToMany(models.transacciones, {
    as: 'transacciones',
    through: 'transacciones_nft',
    foreignKey: 'codigo_unico',
    otherKey: 'codigo_operacion',
  });
};

module.exports = nft;
>>>>>>> ab59042e32d0a074f2570ba1c6c1824c2c6c532b
