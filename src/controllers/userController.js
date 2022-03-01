const USER = {

    profile: function (req, res) {
        res.render('user/usuario');
    },

    editProfile: function(req,res){
        res.render('user/edicionRegistro')
    }
};

module.exports = USER;