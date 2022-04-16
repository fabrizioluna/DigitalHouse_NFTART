module.exports = function(sequelize,DataTypes){
    
    let alias = "Usuarios";
        
    let columnas = {
        id_usuarios:{
            type:DataTypes.INTERGER,
            primaryKey:true,
            autoIncrement:true,
        },
        Nombre_Usuario:{
            type:DataTypes.STRING,
        },
        Alias:{
            type:DataTypes.STRING
        },
        // email:{
        //     type:DataTypes.STRING
        // },
        Contrasena:{
            type:DataTypes.STRING
        },
        FechaNacimiento:{
            type:DataTypes.DATE
        },
        NFTS_Vendidos:{
            type:DataTypes.INTERGER
        },
        NFTS_Comprados:{
            type:DataTypes.INTERGER
        },
        NFTS_Actuales:{
            type:DataTypes.INTERGER
        },
    }
        let config = {
            tableName: "Usuarios",
            timestamps:false
        }
    let Usuarios = sequelize.define(alias,columnas,config);
    return Usuarios;
}