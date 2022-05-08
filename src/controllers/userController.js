const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../../database/models/Usuarios')

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
    const password = bcrypt.hashSync(req.body.contrasenia, 12);
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

  processLogin: function (req, res) {
    let error = validationResult(req);
    if (error.errors.length > 0) {
      return res.render('user/user-login', {
        error: error.mapped(),
      });
    }

    User.findOne({ where: { email: req.body.email } }).then(function (user) {
      // console.log(req.body)
      console.log(req.body.contrasenia, user.dataValues.email)
      console.log(user.dataValues.contrasenia)

      
      console.log(bcrypt.compareSync(req.body.contrasenia, user.dataValues.contrasenia))

      if (
        !bcrypt.compareSync(req.body.contrasenia, user.dataValues.contrasenia)
      ) {
        console.log('No paso la validacion')
      return res.render('user/user-login', {
        error: {
          top: {
            msg: 'Credenciales inválidas',
          },
        },
      });
      }
      console.log('Paso la validacion')
        req.session.userLogged = userLogged;
        console.log('paso la segunda validacion');
        if (rememberUser === 'yes') {
          res.cookie('userEmail', email, { maxAge: 30000 });
        }
      
    });
  },
    

  signin: async function (req, res) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      console.log(req.body.contrasenia,
        user.dataValues.contrasenia)
      const passwordIsValid = bcrypt.compareSync(
        req.body.contrasenia,
        user.dataValues.contrasenia
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          message: "Invalid Password!",
        });
      }
    } catch(err) {
      console.log(err)
    }
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
