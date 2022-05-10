const { body } = require('express-validator');
const Usuarios = require('../../database/models/Usuarios');

let registerValidation = [
  body('fullName').notEmpty().withMessage('Completa el nombre'),
  body('userName')
    .notEmpty()
    .withMessage('Completa el nombre de usuario')
    .bail()

    // Validación de pre existencia de nombre de usuario
    // .custom(async function (value, { req }) {
    //   let userExists = false;

    //   usersDB.forEach(function (e) {
    //     if (e.userName === req.body.userName) {
    //       return (userExists = true);
    //     }
    //   });

    //   if (userExists) {
    //     throw new Error('Nombre de usuario en uso');
    //   }

    //   return true;
    // }),
    ,
  body('email')
    .notEmpty()
    .withMessage('Completa el correo electrónico')
    .bail()
    .isEmail()
    .withMessage('Ingresa un correo electrónico válido')
    .bail()

    // Validación de pre existencia de correo electrónico
    .custom(async function (value, { req }) {

        const emailExists = await Usuarios.findOne({ where: { email: req.body.email } });
        if(emailExists !== null) throw new Error('Correo electrónico ya esta en uso.')
        console.log('El middleware', emailExists)
    //   let emailExists = false;

    //   usersDB.forEach(function (e) {
    //     if (e.email === req.body.email) {
    //       return (emailExists = true);
    //     }
    //   });

    //   if (emailExists) {
    //     throw new Error('Correo electrónico en uso');
    //   }

    //   return true;
    }),
  body('birthday').notEmpty().withMessage('Completa la fecha de nacimiento'),
  body('country').notEmpty().withMessage('Completa país de origen'),
  body('userType').notEmpty().withMessage('Define el tipo de cuenta'),
  body('password1').notEmpty().withMessage('Ingresa una contraseña'),
  body('password2')
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
//   body('avatar').custom(function (value, { req }) {
//     let file = req.file;

//     if (!file) {
//       throw new Error('Se debe cargar una imagen');
//     }

//     return true;
//   }),
];

module.exports = registerValidation;

