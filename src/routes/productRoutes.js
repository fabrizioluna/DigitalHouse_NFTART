const express = require('express');
const router = express.Router();
const uploadFile = require('../modules/validImage');

const product = require('../controllers/productController');

router.get('/marketplace', product.marketplace);

// crear producto
router.get('/create', product.create);
router.post('/create', uploadFile.single('imageProduct'), product.processCreate);

// editar producto
router.get('/edit/:id', product.edit);
router.post('/edit', product.processEdit);

// borrar producto
router.get('/delete', product.delete);
router.post('/delete/:id', product.processDelete);

// carrito
router.get('/cart', product.cart);
router.get('/detail/:id', product.detail);
router.get('/get_nfts', product.getNfts)

module.exports = router;