module.exports = function(sequelize,DataTypes){
    
    let alias = "Productos";
        
    let columnas = {
        idnft:{
            type:DataTypes.INTERGER,
            primaryKey:true,
            autoIncrement:true,
        },
        NombreNFT:{
            type:DataTypes.STRING,
        },
        Usuario:{
            type:DataTypes.STRING
        },
        PrecioActualUSD:{
            type:DataTypes.INT
        },
        Categoria:{
            type:DataTypes.INTERGER
        },
        Descripcion:{
            type:DataTypes.STRING
        },
        Autor:{
            type:DataTypes.INTERGER
        },
        Tematica:{
            type:DataTypes.STRING
        },
        // Imagen:{
        //     type:DataTypes.STRING
        // },
    }
        let config = {
            tableName: "nft",
            timestamps:false
        }
    let Productos = sequelize.define(alias,columnas,config);
    return Productos;
}

    
    


    