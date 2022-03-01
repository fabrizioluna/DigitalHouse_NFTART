const { Router } = require('express');
const path = require('path')
const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const MULTER = require('multer');
const uploadFile = require('./../modules/validImage');



const PRODUCT = require('../controllers/productController');

ROUTER.get('/marketplace', PRODUCT.marketplace);
ROUTER.post('/create', uploadFile.single('imageProduct'), PRODUCT.store);
ROUTER.get('/edit/:id', PRODUCT.edit);
ROUTER.post('/edit', PRODUCT.update);
ROUTER.get('/cart', PRODUCT.cart);
ROUTER.get('/detail/:id', PRODUCT.detail);

module.exports = ROUTER;