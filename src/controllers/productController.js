const fs = require('fs')
const path = require('path')

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
        res.render("product/producto-edicion");
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

