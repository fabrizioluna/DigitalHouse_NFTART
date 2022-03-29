
function guestMiddleware (req, rest, next){
    if(req.session.userLogin) {
        return res.redirect('/user/usuario')
    }
    next ();

}

module.exports = guestMiddleware;