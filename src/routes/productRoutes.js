const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const UPLOADFILE = require('../modules/validImage');

const PRODUCT = require('../controllers/productController');

ROUTER.get('/marketplace', PRODUCT.marketplace);
ROUTER.post('/create', UPLOADFILE.single('imageProduct'), PRODUCT.store);
ROUTER.get('/edit/:id', PRODUCT.edit);
ROUTER.post('/edit', PRODUCT.update);
ROUTER.get('/cart', PRODUCT.cart);
ROUTER.get('/detail/:id', PRODUCT.detail);

module.exports = ROUTER;