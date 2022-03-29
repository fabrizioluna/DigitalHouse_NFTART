function userLogeoMiddleware (req, res, next){
    res.locals.isLogged= false;

    if (req.session.userLogeado){
        res.locals.isLogged= true;
        res.locals.userLogeado = req.session.userLogeado;
    }

    next();
}

module.exports = userLogeoMiddleware;