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
    Nft
      .findAll()
      .then((nfts) => console.log(nfts))
      .catch(() => console.log('surgio un error'));
  },

  marketplace: function (req, res) {
    res.render('product/product-marketplace', { productos: productosBD });
  },

  create: function (req, res) {
    res.render('product/product-create');
  },

  processCreate: function (req, res) {
    let idNuevo = productosBD[productosBD.length - 1].id + 1;
    let nombreImagen = req.file.filename;

    let nuevoProducto = {
      id: idNuevo,
      precioUSD: req.body.USD_price,
      precioETH: req.body.ETH_price,
      nombre: req.body.NFT_name,
      categoria: req.body.category,
      descripcion: req.body.NFT_description,
      autor: req.body.NFT_author,
      tematicaAutor: req.body.NFT_theme,
      imagen: nombreImagen,
    };

    productosBD.push(nuevoProducto);

    FS.writeFileSync(
      PATH.join(__dirname, '../data/productos.json'),
      JSON.stringify(productosBD, null, ' ')
    );

    res.redirect('/product/detail/' + idNuevo);
  },

  edit: function (req, res) {
    const PATH_BATABASE = '../data/productos.json';
    let data = null;

    const payload = JSON.parse(
      FS.readFileSync(PATH.join(__dirname, PATH_BATABASE)),
      'utf-8'
    );

    payload.map((element) => {
      if (element.id == req.params.id) {
        return (data = element);
      }
    });

    if (data == null) {
      return res.render('product/product-edit-error', {
        error: {
          text: 'Edit-Error: No se pudo cargar el producto solicitado.',
        },
      });
    }

    res.render('product/product-edit', {
      producto: data,
    });
  },

  processEdit: function (req, res) {
    const PATH_BATABASE = '../data/productos.json';
    const payload = JSON.parse(
      FS.readFileSync(PATH.join(__dirname, PATH_BATABASE)),
      'utf-8'
    );

    const { body: state } = req;
    let indexElement = null;

    const {
      NFT_name,
      NFT_author,
      NFT_description,
      NFT_theme,
      ETH_price,
      USD_price,
      NFT_id: id,
    } = state;

    if (state === undefined) {
      return res.render('product/producto-error-edicion', {
        error: {
          text: 'Update-Error: No se pudo procesar el cambio. (Falta el id o el nuevo estado).',
        },
      });
    }

    payload.map((element, index) => {
      if (parseInt(element.id) === parseInt(id)) {
        return (indexElement = index);
      }
    });

    if (indexElement != null) {
      payload[indexElement] = {
        id: parseInt(id),
        nombre: NFT_name,
        autor: NFT_author,
        descripcion: NFT_description,
        tematicaAutor: NFT_theme,
        precioETH: parseInt(ETH_price),
        precioUSD: parseInt(USD_price),
      };
    } else {
      return res.render('product/producto-error-edicion', {
        error: {
          text: 'Error: Ocurrio un error. No existe el producto a editar en la base de datos.',
        },
      });
    }

    console.log(`Update-Database: Se ha actualizado un producto. \n 
            (Producto: ${id} | Nombre: ${payload[indexElement].nombre})`);

    FS.writeFileSync(
      PATH.join(__dirname, PATH_BATABASE),
      JSON.stringify(payload, null, '  ')
    );
    res.redirect(`/product/detail/${id}`);
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
