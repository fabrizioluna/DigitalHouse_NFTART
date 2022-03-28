const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const { body } = require('express-validator');
const autMiddleware = require ('../modules/autMiddleware');
const guestMiddleware = require ('../modules/guestMiddleware');



const validacionRegistro = [
    body('nombreCompleto').notEmpty().withMessage('Completa el nombre'),
    body('nombreUsuario').notEmpty().withMessage('Completa el nombre de usuario'),
    body('email').notEmpty().withMessage('Completa el correo electrónico'),
    body('fechaNacimiento').notEmpty().withMessage('Completa la fecha de nacimiento'),
    body('pais').notEmpty().withMessage('Completa pais de origen'),
    body('tipoCuenta').notEmpty().withMessage('Define el tipo de cuenta'),
    body('contrasenia1').notEmpty().withMessage('Ingresa una contraseña'),
    body('contrasenia2').notEmpty().withMessage('Ingresa una contraseña'),
];

const validacionLogin = [
    body('email').notEmpty().withMessage('Completa el correo electrónico'),
    body('contrasenia').notEmpty().withMessage('Completa la contraseña'),
];

const USER = require('../controllers/userController');

ROUTER.get('/', autMiddleware, USER.profile);
ROUTER.get('/edicionRegistro', USER.editProfile);
ROUTER.get('/usuarioRegistro',guestMiddleware, USER.register);
ROUTER.post('/usuarioRegistro', validacionRegistro, USER.store);
ROUTER.get('/usuarioLogin',guestMiddleware, USER.login);
ROUTER.post('/usuarioLogin', validacionLogin, USER.enter);
ROUTER.get('/logout', USER.logout);


module.exports = ROUTER;