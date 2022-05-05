const FS = require('fs');
const PATH = require('path');
const Nft = require('../../database/models/nft');


const productosBD = JSON.parse(
  FS.readFileSync(PATH.join(__dirname, '../data/productos.json')),
  'utf-8'
);
const compradoresBD = JSON.parse(
  FS.readFileSync(PATH.join(__dirname, '../data/compradores.json')),
  'utf-8'
);

const PRODUCT = {
  getNfts: () => {
    //   Enpoint de prueba para ver si funcionaba la base de datos.
    Nft.findAll()
      .then((nfts) => console.log(nfts))
      .catch(() => console.log('surgio un error'));
  },

  marketplace: function (req, res) {
    res.render('product/product-marketplace', { productos: productosBD });
  },

  create: function (req, res) {
    res.render('product/product-create');
  },


  // FALTA TERMINAR 
  processCreate:async function (req, res) {
    // let nombreImagen = req.file.filename;
          console.log(req.body)
           Nft.create(req.body)
          .then((nft)=>{
            res.redirect('/product/detail/' + nft.id);
          })
  },

  edit: function (req, res) {
    //   Buscamos por la PrimaryKey
    Nft.findByPk(req.params.id)
      .then(({ dataValues }) => {
        //   Desestructuramos dataValues y lo enviamos a la vista.
        res.render('product/product-edit', {
          producto: dataValues,
        });

        // Está sería la respuesta para cuando migremos a una API Rest.
        // res.status(200).json({
        //     status: true,
        //     producto: dataValues
        // });
      })
      .catch(() => {
        //   Si no encuentra el producto retorna la vista de error.
        res.render('product/product-edit-error', {
          error: {
            text: 'Edit-Error: No se pudo cargar el producto solicitado.',
          },
        });

        // Lo mismo pero para el error
        // res.status(200).json({
        //     status: false,
        //     message: 'No se pudo cargar el producto solicitado.'
        // });
      });
  },

  processEdit: async function (req, res) {
    const {
      imagen,
      nombre_nft,
      descripcion,
      tematica,
      precio_actual_eth,
      precio_actual_usd,
    } = req.body;

    const productUpdate = await Nft.findByPk(req.body.id);

    if (!productUpdate) {
      return res.render('product/product-edit-error', {
        error: {
          text: 'Error: Ocurrio un error. No existe el producto a editar en la base de datos.',
        },
      });
    }

    // Enviamos unicamente los datos que se pueden editar.
    // El id no porque no es editable, tampoco el autor(al menos de momento).
    await productUpdate
      .update({
        imagen,
        nombre_nft,
        descripcion,
        tematica,
        precio_actual_eth,
        precio_actual_usd,
      })
      .catch(() => {
        res.render('product/product-edit-error', {
          error: {
            text: 'Update-Error: No se pudo procesar el cambio. (Faltan datos para hacer la actualización).',
          },
        });
      });

    //   Si todo pasa redireccionamos al user.
    res.redirect(`/product/detail/${req.body.id}`);
  },


  delete: function(req,res){
    res.redirect('/')
  },



  processDelete: function(req,res) {     
     Nft.destroy({where:{
      id: 2
    }})
  },



  cart: function (req, res) {
    res.render('product/product-cart');
  },

  detail: function (req, res) {
    let productoSeleccionado = req.params.id;
    for (p of productosBD) {
      if (p.id == productoSeleccionado) {
        productoEncontrado = p;
        break;
      }
    }

    // for (c of compradoresBD){
    //     if (c.id==productoSeleccionado) {
    //         compradorEncontrado=c;
    //         break;
    //     };
    // };

    res.render('product/product-detail', {
      productos: productoEncontrado /* , compradores:compradorEncontrado */,
    });
  },
};

module.exports = PRODUCT;
