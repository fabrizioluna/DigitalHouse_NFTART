const { validationResult } = require('express-validator');
const bcryptJs = require('bcryptjs');
const bcrypt = require('bcrypt');
const User = require('../../database/models/Usuarios');
const nft = require('../../database/models/nft');
const Categorias = require('../../database/models/Categorias');
const Autores = require('../../database/models/Autores');

const user = {
  register: function (req, res) {
    res.render('user/user-register');
  },

  processRegister: function (req, res) {
    // Verificación de existencia de errores desde express-validator
    let error = validationResult(req);

    console.log(error)
    if (error.errors.length > 0) {
      return res.render('user/user-register', {
        error: error.mapped(),
        old: req.body,
      });
    }

    const password = bcryptJs.hashSync(req.body.contrasenia, 12);
    User.create({
      nombre_usuario: req.body.nombre_usuario,
      usuario: req.body.usuario,
      email: req.body.email,
      fecha_nacimiento: req.body.fecha_nacimiento,
      pais: req.body.pais,
      tipo_usuario: req.body.tipo_usuario,
      contrasenia: password,
      imagen: req.file.filename
    }).then((user) => {
      res.redirect('/user/login/');
    });
  },

  login: function (req, res) {
    res.render('user/user-login');
  },

  processLogin: function (req, res) {
    let error = validationResult(req);
    if (error.errors.length > 0) {
      return res.render('user/user-login', {
        error: error.mapped(),
      });
    }

    User.findOne({ where: { email: req.body.email } }).then(function (user) {
      if (
        !bcrypt.compareSync(req.body.contrasenia, user.dataValues.contrasenia)
      ) {
        return res.render('user/user-login', {
          error: {
            top: {
              msg: 'Credenciales inválidas',
            },
          },
        });
      };
      req.session.userLogged = user.dataValues;
      if (req.body.rememberUser === 'yes') {
        res.cookie('userEmail', user.dataValues.email, { maxAge: 30000 });
      };
      return user;
    }).then(function(user) {
      let products = nft.findAll({
        include:[{model: Categorias, as: "Categoria"}, {model: Autores, as: "Autor"}],
        where: { propietario: user.id }
      });
      return products;
    }).then(function(products) {
      req.session.products = products;
      return res.redirect('/user/profile');
    })
  },

  profile: function (req, res) {
    res.render('user/user-profile', {
      user: req.session.userLogged,
      products: req.session.products
    });
  },

  edit: function (req, res) {
    User.findByPk(req.params.id).then(function () {
      res.render('user/user-edit', {
        user: req.session.userLogged,
      });
    });
  },

  update: function (req, res) {
    User.update(
      req.body,
      { where: { email: req.body.email } }
    ).then(function () {
      let user = User.findOne(
        { where: { email: req.body.email } });
      return user;
    }).then(function (user) {
      req.session.userLogged = user.dataValues;
      res.redirect('/user/profile');
    });
  },

  logout: function (req, res) {
    req.session.destroy();
    res.clearCookie('userEmail');
    return res.redirect('/');
  },
  cart: function(req, res){
    res.render('user/user-cart')
  }
};

module.exports = user;