const fs = require('fs')
const path = require('path');
// const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../../database/models/Usuarios');

const usersDB = JSON.parse(fs.readFileSync(path.join(__dirname,"../data/users.json")),'utf-8');

const user = {
    
    profile: function (req, res) {
        res.render('user/user-profile', {
            user: req.session.userLogged
        });
    },

    edit: function (req, res) {
        res.render('user/user-edit', {
            user: req.session.userLogged
        });
    },

    
    register: function (req, res) {
        res.render('user/user-register');
    },
    
    processRegister: function (req, res){
        User
        .create(req.body) 
        .then(({ dataValues }) => {
          res.redirect('/user/login/');
        })

        // .catch((err) => console.log(err));

        // Verificación de existencia de errores desde express-validator
        // let error = validationResult(req);

        // if (error.errors.length > 0) {
        //     return res.render('user/user-register', {
        //         error: error.mapped(), 
        //         old: req.body
        //     });
        // };

        // // Desestructuración del objeto req.body
        // const { 
        //     fullName,
        //     userName,
        //     email,
        //     birthday,
        //     country,
        //     userType,
        //     password1,
        //     password2
        // } = req.body

        // // Ingreso de datos a la BD
        // let idNew = usersDB[usersDB.length-1].id + 1;

        // let hashedPassword = bcrypt.hashSync(password2, 12);

        // usersDB.push({
        //     id: idNew,
        //     fullName,
        //     userName,
        //     email,
        //     birthday,
        //     country,
        //     userType,
        //     hashedPassword: hashedPassword,
        //     avatar: req.file.filename
        // });

        // fs.writeFileSync(path.join(__dirname,"../data/users.json"), JSON.stringify(usersDB,null,' '));

        // res.redirect('/user/login');
    
    },

    login: function (req, res) {
        res.render('user/user-login');
    },

    processLogin: function (req, res) {

        // Verificación de existencia de errores desde express-validator
        let error = validationResult(req);

        if (error.errors.length > 0) {
            return res.render('user/user-login', {
                error: error.mapped()
            });
        };

        // Desestructuración del objeto req.body
        const {
            email,
            password,
            rememberUser
        } = req.body

        // Validación de credenciales
        let userLog = false;
        
        usersDB.forEach( function (e) {
            if ((e.email === email) && (bcrypt.compareSync(password, e.hashedPassword))) {
                return userLog = true;
            }
        });

        if (!userLog) {
            return res.render('user/user-login', {
                error: {
                    top: {
                        msg: 'Credenciales inválidas'
                    }
                }
            });                
        };

        // Creación de session
        let userLogged = null;

        if (userLog) {
            userLogged = usersDB.find( function (e) {
                return (e.email === email);
            });
        };

        if (userLog) {
            // delete userLogged.hashedPassword;
            req.session.userLogged = userLogged;
        };

        // Creación de cookie
        if (rememberUser === "yes") {
            res.cookie("userEmail", email, { maxAge: 30000 });
        };

        if (userLog) {
            res.redirect('/user');
        };
        
    },

    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie("userEmail");
        return res.redirect('/');
    }

};

module.exports = user;