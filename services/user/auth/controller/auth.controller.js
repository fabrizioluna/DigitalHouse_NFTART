const { validationResult } = require("express-validator");
const { registerUser, loginUser } = require("../dao/auth.dao");
const path = require('path');
const fs = require('fs');

const localPath = '../../../../src/data/usuarios.json';
const localStorageUsers = JSON.parse(fs.readFileSync(path.join(__dirname, localPath)),'utf-8');


// Controlador para renderizar la vista Register cuando venga por get.
const renderRegisterView = (req, res) => {
    res.cookie('Cookie', {masAge: 6000});
    res.render('user/usuario-registro', {
        error: null,
        old: null
    });
};

const createUser = async(req, res) => {
    // Si hay errores del formulario los almacenamos en está variable.
    const middlewareErrors = validationResult(req);

    // Si hay algun campo vacio... entonces hacemos return y
    // lo de abajo no se ejecuta.
    if (!middlewareErrors.isEmpty()) {
        return res.render('user/usuario-registro', {
            error: middlewareErrors.errors, 
            old: req.body
        });
    };

    // Importamos nuestro registerUser y le pasamos el req.body
    // donde viene toda la informacion del formulario de registro.
    // Hacemos una promesa... 
    registerUser(req.body)
        .then((data) => {
            console.log(data)
            // Con el then decimos... si no hubo ningún REJECT en registerUser
            // entonces... está correcto y paso todo, asi solo renderizamos la vista.
            res.redirect('/user/usuarioLogin');
        })
        .catch((error) => {
            console.log(error)
            // Si hay algun error en la promesa de registerUser...
            // entonces quiere decir que hubo un REJECT y la promesa
            // devuelve ese error que le pasamos, .catch((error)) captura la respuesta
            // es decir los errores y se los pasamos a la vista para que los muestre.
            return res.render('user/usuario-registro', error);
        });
};

const authenticateUser = async(req, res) => {
    let error = validationResult(req);
    
    if (!error.isEmpty()) {
        return res.render('user/usuario-login', {
            error: error.errors, 
            old: req.body
        });
    };

    loginUser(req.body)
        .then(() => {
            req.session.userLogeado = localStorageUsers;
            return res.redirect('/');
        })
        .catch((error) => {
            return res.render('user/usuario-login', error);
        });
}

// Controller para mostrar las vistas de Login cuando llegan por GET.
const renderLoginView = (req, res) => res.render('user/usuario-login', { error: null, old: null});

const logoutUser =  (req, res) => {
    req.session.destroy();
    return res.redirect('/');
}


module.exports = {
    createUser,
    renderRegisterView,
    authenticateUser,
    renderLoginView,
    logoutUser,
}