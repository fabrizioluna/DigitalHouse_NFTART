const fs = require('fs')
const path = require('path');

const productosBD = JSON.parse(fs.readFileSync(path.join(__dirname,"../data/productos.json")),'utf-8');
const compradoresBD = JSON.parse(fs.readFileSync(path.join(__dirname,"../data/compradores.json")),'utf-8');

const PRODUCT = {

    marketplace: function (req, res) {
        res.render("product/producto-marketplace");
    },

    create: function (req, res) {
        res.render("product/producto-creacion");
    },

    edit: function (req, res) {
        const PATH_BATABASE = '../data/productos.json';
        let data = null;

        const payload = JSON.parse(fs.readFileSync(path.join(__dirname, PATH_BATABASE)),'utf-8');

        payload.map((element) => {
            if(element.id == req.params.id){
                return data = element; 
            }
        });

        if(data == null){
            return res.render('product/producto-error-edicion', {
                error: {
                    text: 'Edit-Error: No se pudo cargar el producto solicitado.'
                }
            });
        }

        res.render('product/producto-edicion', {
            producto: data
        });
    },

    update: function (req, res) {
        const PATH_BATABASE = '../data/productos.json';
        const payload = JSON.parse(fs.readFileSync(path.join(__dirname, PATH_BATABASE)),'utf-8');
        
        const { body: state } = req;
        let indexElement = null;

        const { 
            NFT_name,
            NFT_author,
            NFT_description,
            NFT_theme,
            ETH_price,
            USD_price,
            NFT_id: id
        } = state;

        if(state === undefined){
            return res.render('product/producto-error-edicion', {
                error: {
                    text: 'Update-Error: No se pudo procesar el cambio. (Falta el id o el nuevo estado).'
                }
            });
        }
    
        payload.map((element, index) => {
            if(parseInt(element.id) === parseInt(id)){
                return indexElement = index; 
            }
        });
    
        if(indexElement != null){
            payload[indexElement] = {
                id: parseInt(id),
                nombre: NFT_name,
                autor: NFT_author,
                descripcion: NFT_description,
                tematicaAutor: NFT_theme,
                precioETH: parseInt(ETH_price),
                precioUSD: parseInt(USD_price)
            };
        } else {
            return res.render('product/producto-error-edicion', {
                error: {
                    text: 'Error: Ocurrio un error. No existe el producto a editar en la base de datos.'
                }
            });
        }
    
        console.log(`Update-Database: Se ha actualizado un producto. \n 
            (Producto: ${id} | Nombre: ${payload[indexElement].nombre})`);
    
        fs.writeFileSync(path.join(__dirname, PATH_BATABASE), JSON.stringify(payload, null, '  '));
        res.redirect(`/product/detail/${id}`);
    },
    
    cart: function (req, res) {
        res.render("product/producto-cart");
    },

    detail: function (req, res) {
        let productoSeleccionado = req.params.id;
        for (p of productosBD) {
            if (p.id==productoSeleccionado) {
                productoEncontrado=p;
                break;
            };
        };

        for (c of compradoresBD){
            if (c.id==productoSeleccionado) {
                compradorEncontrado=c;
                break;
            };
        };

        res.render("product/producto-detalle",{productos:productoEncontrado,compradores:compradorEncontrado});
    },

};

module.exports = PRODUCT;