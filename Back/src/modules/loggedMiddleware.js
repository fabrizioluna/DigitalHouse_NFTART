function loggedMiddleware (req, res, next){
    if (typeof(req.session.userLogged) !== 'undefined') {
        res.redirect('/user/profile');
    };
    
    next();
};

module.exports = loggedMiddleware;