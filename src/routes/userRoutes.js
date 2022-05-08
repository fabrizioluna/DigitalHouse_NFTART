const express = require('express');
const router = express.Router();

const loggedMiddleware = require ('../modules/loggedMiddleware');
const guestMiddleware = require ('../modules/guestMiddleware');

const registerValidation = require('../modules/registerValidation');
const loginValidation = require('../modules/loginValidation');

const uploadFile = require('../modules/registerImage');

const user = require('../controllers/userController');


// Registro Usuario
router.get('/register', loggedMiddleware, user.register);
router.post('/register', uploadFile.single("avatar"), loggedMiddleware, user.processRegister);


// Login Usuario
router.get('/login', loggedMiddleware, user.login);
router.post('/login', loginValidation, user.signin);


// Obtener el Detalle del Usuario
router.get('/profile/', guestMiddleware, user.profile);


// Edicion del Usuario
// router.get('/edit', guestMiddleware, user.edit);
// router.put('/edit', guestMiddleware, user.processEdit);




// // Edit Borrar Producto

// router.get('/logout', user.logout);







module.exports = router;