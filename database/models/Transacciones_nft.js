module.exports = function(sequelize,DataTypes){
    
    let alias = "Transacciones_nft";
        
    let columnas = {
        id:{
            type:DataTypes.INTERGER,
            primaryKey:true,
            autoIncrement:true,
        },
        operacion:{
            type:DataTypes.INTERGER,
        },
        nombre_nft:{
            type:DataTypes.INTERGER
        },
    };
        let config = {
            tableName: "transacciones_nft",
            timestamps:false
        }
    let Transacciones_nft = sequelize.define(alias,columnas,config);
    return Transacciones_nft;
}