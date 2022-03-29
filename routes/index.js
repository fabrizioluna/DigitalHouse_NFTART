const express =             require('express');
const router =              express.Router();
const guestMiddleware =     require('../src/modules/guestMiddleware');
const { 
    registerValidate, 
    loginValidate 
} =                         require('../middlewares/user.middleware');
const { 
    createUser, 
    authenticateUser, 
    renderLoginView, 
    renderRegisterView
} =                         require('../services/user/auth/controller/auth.controller');
const { 
    home 
} =                         require('../services/public.main.services');
const { 
    productValidate, 
} =                         require('../services/products/nfts-products/controller/nfts.products.controller');



// Aqui irian todos los endpoints: El path seria localhost:3000/ 


// Endpoints de Main
router.get('/', home)

// Endpoints de Products
router.get('/product/edit/:id', productValidate);

// Endpoints de User
router.post('/auth/register',   registerValidate, createUser);
router.get('/auth/register',    guestMiddleware, renderRegisterView);
router.post('/auth/login',      loginValidate, authenticateUser);
router.get('/auth/login',       guestMiddleware, renderLoginView);


// Exportamos el router para usarlo en el entry point
module.exports = router;