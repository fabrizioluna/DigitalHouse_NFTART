
function autMiddleware (req, rest, next){
    if(!req.session.userLogin) {
        return res.redirect('user/usuario-login')
    }
    next ();

}

module.exports = autMiddleware;