const { body } = require('express-validator');

let loginValidation = [
    body('email')
        .notEmpty().withMessage('Completa el correo electrónico').bail()
        .isEmail().withMessage('Ingresa un correo electrónico válido'),
    body('password').notEmpty().withMessage('Completa la contraseña')
];

module.exports = loginValidation;