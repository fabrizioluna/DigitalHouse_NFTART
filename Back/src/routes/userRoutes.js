const express = require('express');
const router = express.Router();

const loggedMiddleware = require('../modules/loggedMiddleware');
const guestMiddleware = require('../modules/guestMiddleware');

const registerValidation = require('../modules/registerValidation');
const loginValidation = require('../modules/loginValidation');

const uploadFile = require('../modules/registerImage');

const user = require('../controllers/userController');

// Registro Usuario
router.get('/register', loggedMiddleware, user.register);
router.post(
  '/register',
  uploadFile.single('avatar'),
  registerValidation,
//   loggedMiddleware,
  user.processRegister
);

// Login Usuario
router.get('/login', loggedMiddleware, user.login);
router.post('/login', loginValidation, user.processLogin);

// Obtener el Detalle del Usuario
router.get('/profile', guestMiddleware, user.profile);

// Edicion del Usuario
router.get('/edit/:id', guestMiddleware, user.edit);
router.post('/edit', guestMiddleware, user.update);

// // Edit Borrar Producto

router.get('/logout', user.logout);

// Ruta carrito
router.get('/cart',user.cart)

module.exports = router;
