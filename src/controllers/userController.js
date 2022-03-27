const FS = require('fs')
const PATH = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const usuariosBD = JSON.parse(FS.readFileSync(PATH.join(__dirname,"../data/usuarios.json")),'utf-8');

const USER = {

    profile: function (req, res) {
        res.render('user/usuario');
    },

    editProfile: function (req, res) {
        res.render('user/edicionRegistro');
    },

    register: function (req, res) {
        res.render('user/usuario-registro', {
            error: null,
            old: null
        });
    },

    login: function (req, res) {
        res.render('user/usuario-login', {
            error: null,
            old: null
        });
    },

    store: function (req, res) {

        const { 
            nombreCompleto,
            nombreUsuario,
            email,
            fechaNacimiento,
            pais,
            tipoCuenta,
            contrasenia1,
            contrasenia2
        } = req.body

        let error = validationResult(req);
        
        if (!error.isEmpty()) {
            return res.render('user/usuario-registro', {
                error: error.errors, 
                old: req.body
            });
        };

        const userExist = usuariosBD.map( function (e) {
            if ((e.nombreUsuario === nombreUsuario) || (e.email === email)) return true;
        });

        if(userExist){
            return res.render('user/usuario-registro', {
                error: [
                    {
                        msg: 'Nombre de usuario o email en uso'
                    }
                ],
                old: req.body
            });
        }

        let idNuevo = usuariosBD[usuariosBD.length-1].id + 1;

        if (contrasenia1 !== contrasenia2) {
            return res.render('user/usuario-registro', {
                error: [
                    {
                        msg: 'Las contraseñas no coinciden'
                    }
                ],
                old: req.body
            });
        };

        let passHasheada = bcrypt.hashSync(contrasenia2, 12);

        usuariosBD.push({
            id: idNuevo,
            nombreCompleto,
            nombreUsuario,
            email,
            fechaNacimiento,
            pais,
            tipoCuenta,
            contrasenia: passHasheada,
        });

        FS.writeFileSync(PATH.join(__dirname,"../data/usuarios.json"), JSON.stringify(usuariosBD,null,' '));

        res.redirect("/");
    
    },

    enter: function (req, res) {

        const { email,
        contrasenia
        } = req.body

        let error = validationResult(req);

        if (!error.isEmpty()) {
            return res.render('user/usuario-login', {
                error: error.errors, 
                old: req.body
            });
        };

        usuariosBD.map( function (e) {
            if ((e.email === email) && bcrypt.compareSync(contrasenia, e.contrasenia)) {
                // req.session.aut = true;
                res.cookie('cookie',{maxAge:60000});
                return res.redirect('/');
            } /*else {
                // req.session.aut = false;
                return res.render('user/usuario-login', {error: "Usuario y/o contraseña no coinciden"});
            }*/
        });
    
    },
};

module.exports = USER;