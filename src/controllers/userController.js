const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../../database/models/Usuarios');

const user = {

    register: function (req, res) {
        res.render('user/user-register');
    },

    processRegister: function (req, res){
    // Verificación de existencia de errores desde express-validator
        let error = validationResult(req);
        if (error.errors.length > 0) {
            return res.render('user/user-register', {
                error: error.mapped(), 
                old: req.body
            });
        };
        const password = bcrypt.hashSync(req.body.contrasenia, 12)
        User
        .create({
            nombre_usuario: req.body.nombre_usuario,
            usuario: req.body.usuario,
            email: req.body.email,
            fecha_nacimiento: req.body.fecha_nacimiento,
            pais: req.body.pais,
            tipo_usuario: req.body.tipo_usuario,
            contrasenia: password
        }) 
        .then((user) => {
          res.redirect('/user/login/');
        })

    },

    login: function (req, res) {
        res.render('user/user-login');
    },

    processLogin: function (req, res) {
        User.findOne({where: {email: req.body.email}})

            // Verificación de existencia de errores desde express-validator
    //     let error = validationResult(req);
    //     if (error.errors.length > 0) {
    //         return res.render('user/user-login', {
    //             error: error.mapped()
    //         });
    //     };

    // // Desestructuración del objeto req.body
    // const {
    //     email,
    //     password,
    //     rememberUser
    // } = req.body

    // // Validación de credenciales
    // let userLog = false;
    
    // usersDB.forEach( function (e) {
    //     if ((e.email === email) && (bcrypt.compareSync(password, e.hashedPassword))) {
    //         return userLog = true;
    //     }
    // });

    // if (!userLog) {
    //     return res.render('user/user-login', {
    //         error: {
    //             top: {
    //                 msg: 'Credenciales inválidas'
    //             }
    //         }
    //     });                
    // };

    // // Creación de session
    // let userLogged = null;

    // if (userLog) {
    //     userLogged = usersDB.find( function (e) {
    //         return (e.email === email);
    //     });
    // };

    // if (userLog) {
    //     // delete userLogged.hashedPassword;
    //     req.session.userLogged = userLogged;
    // };

    // // Creación de cookie
    // if (rememberUser === "yes") {
    //     res.cookie("userEmail", email, { maxAge: 30000 });
    // };

    // if (userLog) {
    //     res.redirect('/user');
    // };


    },
    // profile: function (req, res) {
    //     res.render('user/user-profile', {
    //         user: req.session.userLogged
    //     });
    // },

    edit: function (req, res) {
        User.findByPk(req.params.id).then(function(){
            res.render('user/user-edit', {
                user: req.session.userLogged
            });
        })
    },


    edit: function (req, res) {
        nft
          .findByPk(req.params.id)
          .then(({ dataValues }) => {
            res.render('product/product-edit', {
              producto: dataValues,
            });
          })
          .catch(() => {
            res.render('product/product-edit-error', {
              error: {
                text: 'Edit-Error: No se pudo cargar el producto solicitado.',
              },
            });
          });
      

    update: function(req, res){
        User.findByPk(req.body.id).then(function(){

        })



  
    
     
    },

    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie("userEmail");
        return res.redirect('/');
    }

};

module.exports = user;