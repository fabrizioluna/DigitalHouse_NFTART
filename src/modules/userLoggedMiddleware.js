const fs = require('fs')
const path = require('path');

const usersDB = JSON.parse(fs.readFileSync(path.join(__dirname,"../data/users.json")),'utf-8');

function userLoggedMiddleware (req, res, next){
    res.locals.isLogged = false;
    res.locals.userLogged = null;

    if (typeof(req.cookies.userEmail) !== 'undefined') {
        res.locals.isLogged = true;
        res.locals.userLogged = usersDB.find( function (e) {
            return (e.email === req.cookies.userEmail);
        });
    };

    if (typeof(req.session.userLogged) !== 'undefined') {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    };

    next();
}

module.exports = userLoggedMiddleware;