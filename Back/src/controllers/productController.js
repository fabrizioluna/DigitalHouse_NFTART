const { Op } = require('sequelize');
const nft = require('../../database/models/nft');
const Categorias = require('../../database/models/Categorias');
const Autores = require('../../database/models/Autores');

const PRODUCT = {
  marketplace: function (req, res) {
    nft.findAll({include:[{model: Categorias, as: "Categoria"}, {model: Autores, as: "Autor"}]})
      .then( function(products) {
        // console.log(products);
        // res.json(products);
        res.render('product/product-marketplace', { productos: products })
      }
    );
  },

  create: function (req, res) {
    res.render('product/product-create');
  },

  processCreate: async function (req, res) {
    nft
      .create({
        nombre_nft: req.body.nombre_nft,
        usuario_creador: req.body.usuario_creador,
        precio_actual_eth: req.body.precio_actual_eth,
        precio_actual_usd: req.body.precio_actual_usd,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        autor: req.body.autor,
        tematica: req.body.tematica,
        codigo_unico: req.body.codigo_unico,
        imagen: req.file.filename
      })
      .then(({ dataValues }) => {
        res.redirect('/product/detail/' + dataValues.id);
      })
      .catch((err) => console.log(err));
  },

  edit: function (req, res) {
    nft
      .findByPk(req.params.id)
      .then(({ dataValues }) => {
        res.render('product/product-edit', {
          producto: dataValues,
        });
      })
      .catch(() => {
        res.render('product/product-edit-error', {
          error: {
            text: 'Edit-Error: No se pudo cargar el producto solicitado.',
          },
        });
      });
  },

  processEdit: async function (req, res) {
    const productUpdate = await nft.findByPk(req.body.id);

    // Comprobamos que exista el proudcto.
    if (!productUpdate) {
      return res.render('product/product-edit-error', {
        error: {
          text: 'Error: Ocurrio un error. No existe el producto a editar en la base de datos.',
        },
      });
    }

    // Si existe entonces hacemos el update.
    await productUpdate
      .update({
        imagen: req.body.imagen,
        nombre_nft: req.body.nft,
        descripcion: req.body.descripcion,
        tematica: req.body.tematica,
        precio_actual_eth: req.body.precio_actual_eth,
        precio_actual_usd: req.body.precio_actual_usd,
      })
      .then(() => res.redirect(`/product/detail/${req.body.id}`))
      .catch(() => {
        res.render('product/product-edit-error', {
          error: {
            text: 'Update-Error: No se pudo procesar el cambio. (Faltan datos para hacer la actualización).',
          },
        });
      });
  },

  delete: function (req, res) {
    // Este endpoint queda pendiente.
    // Esta petidición necesita una vista.
    res.redirect('/');
  },

  processDelete: function (req, res) {
    nft
      .destroy({ where: { id: req.params.id } })
      .then(() => res.redirect('/'))
      .catch((err) => console.log(err));
  },

  detail: async function (req, res) {
    await nft
      .findOne({ 
        include: { model: Categorias, as: "Categoria" },
        where: { id: req.params.id } })
      .then(({ dataValues }) =>
        res.render('product/product-detail', { productos: dataValues })
      )
      .catch((err) => console.log(err));
  },

  search: function (req, res) {
    nft
      .findAll({
        raw: true,
        where: { nombre_nft: { [Op.like]: `%${req.query.like}%` } },
      })
      .then((products) => res.render('product/product-search', { productos: products }))
      .catch((err) => console.log(err));
  },
};

module.exports = PRODUCT;
