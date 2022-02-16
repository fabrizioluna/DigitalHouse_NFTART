const PRODUCT = {

    marketplace: function (req, res) {
        res.render("producto-marketplace");
    },

    detail: function (req, res) {
        res.render("producto-detalle");
    },

    create: function (req, res) {
        res.render("producto-creacion");
    },

    edit: function (req, res) {
        res.render("producto-edicion");
    },
    
    cart: function (req, res) {
        res.render("producto-cart");
    },

};

module.exports = PRODUCT;