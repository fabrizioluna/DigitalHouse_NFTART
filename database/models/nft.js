module.exports = function(sequelize,DataTypes){
    
    let alias = "nft";
        
    let columnas = {
        id:{
            type:DataTypes.INTERGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nombre_nft:{
            type:DataTypes.STRING,
        },
        categoria:{
           type:DataTypes.STRING
        },
        descripcion:{
            type:DataTypes.STRING
        },
        precio_actual_usd:{
            type:DataTypes.FLOAT
        },
        precio_actual_eth:{
            type:DataTypes.FLOAT
        },
        Autor:{
            type:DataTypes.INTERGER
        },
        Tematica:{
            type:DataTypes.STRING
        },
        Imagen:{
            type:DataTypes.STRING
        },
    }
        let config = {
            tableName: "nft",
            timestamps:false
        }
    let nft = sequelize.define(alias,columnas,config);
    
    nft.associate= function(models){

        nft.belonsToMany(models,Transacciones,{
            as:"Transacciones",
            trough: "Transacciones_nft",
            foreignKey: "id",
            otherKey: "if",
            timestamps: false 
        });
    }
    
    return nft;
}

    
    


    