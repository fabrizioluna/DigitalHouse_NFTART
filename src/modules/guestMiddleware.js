function guestMiddleware (req, res, next){
    if (typeof(req.session.userLogged) === 'undefined') {
        res.redirect('/user/register');
    };
    
    next();
};

module.exports = guestMiddleware;