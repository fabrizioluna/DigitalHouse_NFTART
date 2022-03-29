const EXPRESS = require('express');
const APP = EXPRESS();
const PATH = require('path');
const METHODOVERRIDE = require('method-override'); // Para poder usar los métodos PUT y DELETE
const session = require('express-session');
const cookie = require('cookie-parser');
const userLogeoMiddleware = require ('./src/modules/userLogeoMiddleware');

const MAIN = require('./src/routes/mainRoutes');
const PRODUCT = require('./src/routes/productRoutes');
const USER = require('./src/routes/userRoutes');
const router = require('./routes');



APP.use(session({
    secret: '4E4654415254',
    resave: true,
    saveUninitialized: true
}
));

APP.use(userLogeoMiddleware);


APP.use(EXPRESS.static(PATH.join(__dirname, './public')));
APP.use(EXPRESS.urlencoded({extended: false}));
APP.use(EXPRESS.json());
APP.use(METHODOVERRIDE('_method')); 
APP.use(cookie());

APP.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo en el puerto 3000')
});

// APP.use('/', MAIN);
// APP.use('/product', PRODUCT);
// APP.use('/user', USER);

APP.use('/', router);



APP.use('*', function (req, res) {
    res.sendFile(__dirname + '/public/img/error_404.png')
});

APP.set('view engine', 'ejs');