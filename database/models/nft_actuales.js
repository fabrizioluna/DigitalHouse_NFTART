module.exports = function(sequelize,DataTypes){
    
    let alias = "nft_actuales";
        
    let columnas = {
        id:{
            type:DataTypes.INTERGER,
            primaryKey:true,
            autoIncrement:true,
        },
        usuario:{
            type:DataTypes.INTERGER,
        },
        nombre_nft:{
            type:DataTypes.INTERGER,
        },
    }
        let config = {
            tableName: "nft_actuales",
            timestamps:false
        }
    let nft_actuales = sequelize.define(alias,columnas,config);
    
    // nft.associate = function(models){
    //     nft.hola!!

    // }
    
    return nft_actuales;
}
