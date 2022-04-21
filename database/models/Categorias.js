module.exports = function(sequelize,DataTypes){
    
    let alias = "Categorias";
        
    let columnas = {
        id:{
            type:DataTypes.INTERGER,
            primaryKey:true,
            autoIncrement:true,
        },
        categoria:{
            type:DataTypes.STRING,
        },
    };
        let config = {
            tableName: "categorias",
            timestamps:false
        }
    let Autores = sequelize.define(alias,columnas,config);
    return Autores;
}