const { DataTypes } = require('sequelize/types');
const { db } = require('..');

const nft = db.define('nft',

        {
          id_nft:{
              type:DataTypes.INTERGER,
              primaryKey:true,
              autoIncrement:true,
          },  
            usuario_creador:{
              type:DataTypes.STRING,
          },
          nombre_nft:{
              type:DataTypes.STRING,
          },
          categoria:{
            type:DataTypes.STRING
          },
          descripcion:{
              type:DataTypes.TEXT
          },
          precio_actual_usd:{
              type:DataTypes.DECIMAL
          },
          precio_actual_eth:{
              type:DataTypes.DECIMAL
          },
          autor:{
              type:DataTypes.INTERGER
          },
          tematica:{
              type:DataTypes.STRING
          },
          imagen:{
              type:DataTypes.STRING
          },
          codigo_unico:{
            type:DataTypes.INTERGER,
          }
        },

        {
          tableName: "autores",
          timestamps:false
        });
    
        nft.associate = function(models){
        
        // Relación Usuarios
        nft.hasMany(models.usuarios,{
            as: "usuarios",
            foreignKey: "usuario_creador",
        });

        // Relación Autores
        nft.hasMany(models.autores,{
          as:"autores",
          foreignKey:"autor"
        });

        // Relación Categorias
        nft.belongsToMany(models.categorias,{
            as: "categorias",
            through:"nft_categorias",
            foreignKey:"nombre_nft",
            otherKey:"categoria",
        });

        // Relación Transacciones
        nft.belongsToMany(models.transacciones,{
            as: "transacciones",
            through:"transacciones_nft",
            foreignKey:"codigo_unico",
            otherKey:"codigo_operacion",
        });
      }

module.exports = nft;