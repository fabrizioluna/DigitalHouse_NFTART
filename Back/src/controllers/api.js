const nft = require('../../database/models/nft');
const User = require('../../database/models/Usuarios');
const Category = require('../../database/models/Categorias');
const Autores = require('../../database/models/Autores');
const { Sequelize } = require('sequelize');

const apiUser = {
  // Todos los Usuarios
  users: function (req, res) {
    User.findAll({
      attributes: { exclude: ['contrasenia', 'imagen'] },
    }).then(function (users) {
      res.json({
        description: 'User list',
        code: 200,
        users,
      });
    });
  },
  // Un Usuario por ID quitando datos sensibles
  userId: function (req, res) {
    User.findByPk(req.params.id, {
      attributes: { exclude: ['contrasenia', 'imagen'] },
    }).then(function (user) {
      res.json({
        description: 'User Id',
        code: 200,
        user,
      });
    });
  },
  // Cantidad de Usuarios
  countUsers: function (req, res) {
    User.count({
      attributes: { exclude: ['contrasenia', 'imagen'] },
    }).then(function (user) {
      res.json({
        description: 'Count User',
        code: 200,
        user,
      });
    });
  },
};

const apiProduct = {
  // Servicio que retorne los productos (.count), (.countbycategory), (.productos  datos de cada producto)
  product: async function (req, res) {
    let products = await nft.count();
    let Fotografia = await nft.findAndCountAll({
      where: { categoria: 1 },
    });
    let Musica = await nft.findAndCountAll({ where: { categoria: 5 } });
    let Arte = await nft.findAndCountAll({ where: { categoria: 2 } });
    let Metaverso = await nft.findAndCountAll({
      where: { categoria: 3 },
    });
    let Cine = await nft.findAndCountAll({ where: { categoria: 4 } });
    res.json({
      description: 'Count by Category',
      code: 200,
      products,
      Fotografia,
      Musica,
      Arte,
      Metaverso,
      Cine,
    });
  },

  countCategory: async function (req, res) {
    let countCategory = await Category.findAndCountAll({
      attributes: { exclude: ['id'] },
    });
    res.json({
      description: 'Count Category',
      code: 200,
      countCategory,
    });
  },

  //   productId: async function (req, res){
  //      const productId =  await User.findOne({
  //           where: { id: req.params.id },
  //           include: [
  //             {
  //               model: User,
  //               as: "usuario_creador"
  //             },
  //           ]
  //       })
  //       res.json({
  //           description: "Product ID",
  //           code: 200,
  //           productId
  //       })
  //   }}

  //   productId: async function (req, res){
  //       let productId = await nft.findByPk(req.params.id, {include:{model: User}})
  //   let productId = await nft.findByPk(req.params.id)
  //   // let productId = await nft.findAll({
  //       include: {model : User}
  //   })

  productId: async function (req, res) {
    let productId = await nft.findOne({
      where: { id: req.params.id },
      include: [
        { model: User, as: 'Propietario' },
        { model: Category, as: 'Categoria' },
        { model: Autores, as: 'Autor' },
      ],
    });
    res.json({
      description: 'Product ID',
      code: 200,
      productId,
    });
  },

  allProducts: function (req, res) {
    nft.findAndCountAll().then(function (nft) {
      res.json({
        description: 'Product list',
        code: 200,
        nft,
      });
    });
  },
};

// Servicio que retorne producto particualr por ID (Tablas relacionadas, ruta y url de imagen de prodyucto)

module.exports = { apiUser, apiProduct };
