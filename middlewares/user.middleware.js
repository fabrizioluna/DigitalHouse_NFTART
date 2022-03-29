const { body } = require("express-validator");

const registerValidate = [
    body('nombreCompleto').notEmpty().withMessage('Completa el nombre'),
    body('nombreUsuario').notEmpty().withMessage('Completa el nombre de usuario'),
    body('email').notEmpty().withMessage('Completa el correo electrónico'),
    body('fechaNacimiento').notEmpty().withMessage('Completa la fecha de nacimiento'),
    body('pais').notEmpty().withMessage('Completa pais de origen'),
    body('tipoCuenta').notEmpty().withMessage('Define el tipo de cuenta'),
    body('contrasenia1').notEmpty().withMessage('Ingresa una contraseña'),
    body('contrasenia2').notEmpty().withMessage('Ingresa una contraseña'),
];

const loginValidate = [
    body('email').notEmpty().withMessage('Completa el correo electrónico'),
    body('contrasenia').notEmpty().withMessage('Completa la contraseña'),
];

module.exports = {
    registerValidate,
    loginValidate
}