const User = require('../../database/models/Usuarios');
const { body } = require('express-validator');

let registerValidation = [
  body('nombre_usuario').notEmpty().withMessage('Completa el nombre'),
  body('usuario')
    .notEmpty()
    .withMessage('Completa el nombre de usuario')
    .bail()

    // Validación de pre existencia de nombre de usuario
    .custom(async function (value, { req }) {
      const user = await User.findOne({ where: { usuario: req.body.usuario } });
      if (user != null) {
        throw new Error('El nombre de usuario ya esta en uso.');
      }
      return true;
    }),
  body('email')
    .notEmpty()
    .withMessage('Completa el correo electrónico')
    .bail()
    .isEmail()
    .withMessage('Ingresa un correo electrónico válido')
    .bail()

    .custom(async function (value, { req }) {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (user != null) {
        throw new Error('El email ya esta en uso.');
      }
      return true;
    }),
  body('fecha_nacimiento')
    .notEmpty()
    .withMessage('Completa la fecha de nacimiento'),
  body('pais').notEmpty().withMessage('Completa país de origen'),
  body('tipo_usuarios').notEmpty().withMessage('Define el tipo de cuenta'),
  body('contrasenia').notEmpty().withMessage('Ingresa una contraseña'),
  body('contrasenia2')
    .notEmpty()
    .withMessage('Ingresa una contraseña')
    .bail()

    // Validación de coincidencia entre contraseñas
    .custom(function (value, { req }) {
      if (req.body.contrasenia !== req.body.contrasenia2) {
        throw new Error('Las contraseñas no coinciden');
      }
      return true;
    }),
  // body('fecha_nacimiento').notEmpty().withMessage('Completa la fecha de nacimiento'),
  // body('pais').notEmpty().withMessage('Completa país de origen'),
  // body('tipo_usuarios').notEmpty().withMessage('Define el tipo de cuenta'),
  // body('contrasenia').notEmpty().withMessage('Ingresa una contraseña'),
  // body('contrasenia2')
  //   .notEmpty()
  //   .withMessage('Ingresa una contraseña')
  //   .bail()

  //   // Validación de coincidencia entre contraseñas
  //   .custom(function (value, { req }) {
  //     if (req.body.contrasenia !== req.body.contrasenia2) {
  //       throw new Error('Las contraseñas no coinciden');
  //     }

  //     return true;
  //   }),
  //   body('avatar').custom(function (value, { req }) {
  //     let file = req.file;

  //     if (!file) {
  //       throw new Error('Se debe cargar una imagen');
  //     }

  //     return true;
  //   }),
];

module.exports = registerValidation;
