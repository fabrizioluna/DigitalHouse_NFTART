const express = require('express');
const router = express.Router();

const loggedMiddleware = require ('../modules/loggedMiddleware');
const guestMiddleware = require ('../modules/guestMiddleware');

const registerValidation = require('../modules/registerValidation');
const loginValidation = require('../modules/loginValidation');

const uploadFile = require('../modules/registerImage');

const user = require('../controllers/userController');

router.get('/', guestMiddleware, user.profile);
router.get('/edit', guestMiddleware, user.edit);

// Registro Usuario
router.get('/register', loggedMiddleware, user.register);
router.post('/register', uploadFile.single("avatar"), registerValidation, user.processRegister);



router.get('/login', loggedMiddleware, user.login);
router.post('/login', loginValidation, user.processLogin);
router.get('/logout', user.logout);







module.exports = router;