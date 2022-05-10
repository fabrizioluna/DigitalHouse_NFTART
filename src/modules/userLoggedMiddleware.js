const User = require('../../database/models/Usuarios')

async function userLoggedMiddleware (req, res, next){
    res.locals.isLogged = false;
    res.locals.userLogged = null;

    if (typeof(req.cookies.userEmail) !== 'undefined') {
        res.locals.isLogged = true;
        res.locals.userLogged = await User.findOne({where:{email:req.body.email}} 
            .then(function(user){
                    console.log(user)
                    return user;
            }));
    };

    if (typeof(req.session.userLogged) !== 'undefined') {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    };

    next();
}

module.exports = userLoggedMiddleware;