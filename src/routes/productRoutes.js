const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const PRODUCT = require('../controllers/productController');

ROUTER.get('/marketplace', PRODUCT.marketplace);
ROUTER.get('/create', PRODUCT.create);
ROUTER.get('/edit/:id', PRODUCT.edit);
ROUTER.post('/edit', PRODUCT.update);
ROUTER.get('/cart', PRODUCT.cart);
ROUTER.get('/detail/:id', PRODUCT.detail);

module.exports = ROUTER;