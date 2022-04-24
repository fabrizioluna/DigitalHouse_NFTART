module.exports = function(sequelize,DataTypes){
    
    let alias = "Transacciones";
        
    let columnas = {
        id:{
            type:DataTypes.INTERGER,
            primaryKey:true,
            autoIncrement:true,
        },
        operaciones:{
            type:DataTypes.STRING,
        },
        valor_usd:{
            type:DataTypes.DECIMAL
        },
        valor_eth:{
            type:DataTypes.DECIMAL
        },
        fecha:{
            type:DataTypes.DATE
        },
        medio_de_pago:{
            type:DataTypes.INTERGER
        },
        usuario:{
            type:DataTypes.INTERGER
        },
    };
        let config = {
            tableName: "transacciones",
            timestamps:false
        }
    let Transacciones = sequelize.define(alias,columnas,config);

    Transacciones.associate = function(models) {
        Transacciones.belongsTo(models.Usuarios,{
            as:"Usuarios",
            foreignKey: "id"
        }),
        Transacciones.belongsToMany(models,nft,{
            as:"nft",
            through: "Transacciones_nft",
            foreignKey: "id",
            otherKey: "id",
            timestamps: false
        }),
        Transacciones.belongTo(models,medios_de_pago,{
            as:"medios_de_pago",
            foreignKey: "id"
        })
    }

    return Transacciones;
}
