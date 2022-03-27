const USER = {

    profile: function (req, res) {
        res.render('user/usuario');
    },

    register: (req, res) => {
        res.redirect('home')
    }

};

module.exports = USER;