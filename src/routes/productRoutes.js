const express = require('express');
const router = express.Router();
const uploadFile = require('../modules/validImage');

const product = require('../controllers/productController');

router.get('/marketplace', product.marketplace);
router.get('/create', product.create);
router.post('/create', uploadFile.single('imageProduct'), product.processCreate);
router.get('/edit/:id', product.edit);
router.post('/edit', product.processEdit);
router.get('/cart', product.cart);
router.get('/detail/:id', product.detail);

module.exports = router;