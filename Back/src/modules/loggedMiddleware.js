function loggedMiddleware (req, res, next){
    if (typeof(req.session.userLogged) !== 'undefined') {
        res.redirect('/user');
    };
    
    next();
};

module.exports = loggedMiddleware;