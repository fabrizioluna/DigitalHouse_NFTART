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
        res.render("product/producto-detalle");
    },

};

module.exports = PRODUCT;