const { validationResult } = require("express-validator");
const { registerUser } = require("../dao/auth.dao");

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
        .catch((err) => {
            console.log(err)
            // Si hay algun error en la promesa de registerUser...
            // entonces quiere decir que hubo un REJECT y la promesa
            // devuelve ese error que le pasamos, .catch((error)) captura la respuesta
            // es decir los errores y se los pasamos a la vista para que los muestre.
            return res.render('user/usuario-registro', err);
        });
};

// loginUser: function (req, res) {

//     const { 
//         email,
//         contrasenia
//     } = req.body;

//     let error = validationResult(req);

//     if (!error.isEmpty()) {
//         return res.render('user/usuario-login', {
//             error: error.errors, 
//             old: req.body
//         });
//     };

//     let userNoExist = false;
//     usuariosBD.map( function (e) {    
//         if ((e.email === email) && bcrypt.compareSync(contrasenia, e.contrasenia)){
//             return userNoExist = true
//         }
//     });

//     if(!userNoExist){
//         return res.render('user/usuario-login', {
//             error: [
//                 {
//                     msg: 'Las credenciales no son válidas',
//                 }
//             ],
//             old: req.body
//         })
//     } 
//     req.session.userLogeado = usuariosBD;
//     return res.redirect('/');
// },

// logoutUser: function (req, res) {
//     req.session.destroy();
//     return res.redirect('/')
// },


module.exports = {
    createUser
}