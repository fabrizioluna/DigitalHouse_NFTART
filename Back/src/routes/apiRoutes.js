const express = require('express');
const { apiUser, apiProduct } = require('../controllers/api');
const router = express.Router();

router.get('/users',apiUser.users)
router.get('/userid/:id',apiUser.userId)
router.get('/userscount',apiUser.countUsers)

router.get('/product',apiProduct.product)
router.get('/product/:id',apiProduct.productId)
router.get('/category',apiProduct.countCategory)

module.exports = router;
