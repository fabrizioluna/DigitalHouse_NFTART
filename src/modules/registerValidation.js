const User = require('../../database/models/Usuarios')
const { body } = require('express-validator');


let registerValidation = [
    body('nombre_usuario').notEmpty().withMessage('Completa el nombre'),
    body('usuario')
        .notEmpty().withMessage('Completa el nombre de usuario').bail()

        // Validación de pre existencia de nombre de usuario
        .custom( function (value, { req }) {
            let userExist = false;
            User.findOne({where:{usuario:req.body.usuario}} 
                .then(function(user){
                    if (user){
                        return userExist = true;
                    }
                }));

                if(userExist){
                    throw new Error("Nombre de usuario en uso")
                }

            return true;
        }).withMessage('Nombre de Usuario en uso'),

    body('email')
        .notEmpty().withMessage('Completa el correo electrónico').bail()
        .isEmail().withMessage('Ingresa un correo electrónico válido').bail()

        .custom( function (value, { req }) {
            let userExist = false;
            User.findOne({where:{email:req.body.email}} 
                .then(function(user){
                    if (user){
                        return userExist = true;
                    }
                }));

                if(userExist){
                    throw new Error("Email de usuario en uso")
                }

            return true;
        }).withMessage('Email de Usuario en uso'),
        
    body('fecha_nacimiento').notEmpty().withMessage('Completa la fecha de nacimiento'),
    body('pais').notEmpty().withMessage('Completa país de origen'),
    body('tipo_usuarios').notEmpty().withMessage('Define el tipo de cuenta'),
    body('contrasenia').notEmpty().withMessage('Ingresa una contraseña'),
    body('contrasenia2')
        .notEmpty().withMessage('Ingresa una contraseña').bail()

        // Validación de coincidencia entre contraseñas
        .custom( function (value, { req }) {
            if (req.body.contrasenia !== req.body.contrasenia2) {
                throw new Error("Las contraseñas no coinciden");
            };

            return true;
        }),
    body('avatar').custom( function (value, { req }) {
        let file = req.file;

        if (!file) {
            throw new Error("Se debe cargar una imagen");
        };

        return true;
    })
];

module.exports = registerValidation;