module.exports = (sequelize, DataTypes) => {
  const alias = 'nft_categorias';

  const columnas = {
    id: {
      type: DataTypes.INTERGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoria: {
      type: DataTypes.STRING,
    },
    nombre_nft: {
      type: DataTypes.STRING,
    },
  };
  const config = {
    tableName: 'medios_de_pago',
    timestamps: false,
  };
  let nftCategorias = sequelize.define(alias, columnas, config);
  return nftCategorias;
};
