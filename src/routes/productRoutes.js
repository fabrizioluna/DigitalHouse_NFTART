const { Router } = require('express');
const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const PRODUCT = require('../controllers/productController');

ROUTER.get('/marketplace', PRODUCT.marketplace);
ROUTER.get('/create', PRODUCT.create);
ROUTER.post('/create', PRODUCT.store);
ROUTER.get('/edit', PRODUCT.edit);
ROUTER.get('/cart', PRODUCT.cart);
ROUTER.get('/detail/:id', PRODUCT.detail);

module.exports = ROUTER;