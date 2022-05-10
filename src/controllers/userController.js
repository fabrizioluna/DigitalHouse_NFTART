const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const bcryptJs = require('bcryptjs')
const User = require('../../database/models/Usuarios');

const user = {
  register: function (req, res) {
    res.render('user/user-register');
  },

  processRegister: function (req, res) {
    // Verificación de existencia de errores desde express-validator
    let error = validationResult(req);
    if (error.errors.length > 0) {
      return res.render('user/user-register', {
        error: error.mapped(),
        old: req.body,
      });
    }

    console.log(req.body)
    const password = bcryptJs.hashSync(req.body.contrasenia, 12);
    User.create({
      nombre_usuario: req.body.nombre_usuario,
      usuario: req.body.usuario,
      email: req.body.email,
      fecha_nacimiento: req.body.fecha_nacimiento,
      pais: req.body.pais,
      tipo_usuario: req.body.tipo_usuario,
      contrasenia: password,
    }).then((user) => {
      res.redirect('/user/login/');
    });
  },

  login: function (req, res) {
    res.render('user/user-login');
  },

  processLogin: async function (req, res) {
    let error = validationResult(req);
    if (error.errors.length > 0) {
      return res.render('user/user-login', {
        error: error.mapped(),
      });
    }

    User.findOne({ where: { email: req.body.email } })
    .then(async function (user) {
      if (!bcryptJs.compareSync(req.body.contrasenia, user.dataValues.contrasenia)) {
        return res.render('user/user-login', {
          error: {
            top: {
              msg: 'Credenciales inválidas',
            },
          },
        });
      }
      req.session.userLogged = true;
      if (req.body.rememberUser === 'yes') {
        res.cookie('userEmail', email, { maxAge: 30000 });
      }
      // TODO: Falta agregar los datos dinamicos.
      return res.redirect('/user/profile');
    });
  },

  profile: function (req, res) {
    res.render('user/user-profile', {
      user: req.session.userLogged,
    });
  },

  // edit: function (req, res) {
  //     User.findByPk(req.params.id).then(function(){
  //         res.render('user/user-edit', {
  //             user: req.session.userLogged
  //         });
  //     })
  // },

  update: function (req, res) {
    User.findByPk(req.body.id).then(function () {});
  },

  logout: function (req, res) {
    req.session.destroy();
    res.clearCookie('userEmail');
    return res.redirect('/');
  },
};

module.exports = user;
