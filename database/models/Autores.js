module.exports = function(sequelize,DataTypes){
    
    let alias = "Autores";
        
    let columnas = {
        id:{
            type:DataTypes.INTERGER,
            primaryKey:true,
            autoIncrement:true,
        },
        autor:{
            type:DataTypes.STRING,
        },
    };
        let config = {
            tableName: "autores",
            timestamps:false
        }
    let Autores = sequelize.define(alias,columnas,config);
    return Autores;
}