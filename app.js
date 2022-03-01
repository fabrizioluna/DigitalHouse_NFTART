const EXPRESS = require('express');
const APP = EXPRESS();
const PATH = require('path');
const methodOverride =  require('method-override');
const MAIN = require('./src/routes/mainRoutes');
const PRODUCT = require('./src/routes/productRoutes');
const USER = require('./src/routes/userRoutes');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE



APP.use(EXPRESS.json());
APP.use(EXPRESS.urlencoded({ extended: false }));
APP.use(methodOverride('_method'));


APP.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo en el puerto 3000')
});

APP.use(methodOverride('_method')); 
APP.use(EXPRESS.urlencoded({ extended: false }));
APP.use(EXPRESS.json());
APP.use(EXPRESS.static(PATH.join(__dirname, './public')));


APP.use('/', MAIN);
APP.use('/product', PRODUCT);
APP.use('/user', USER);





APP.use('*', function (req, res) {
    res.sendFile(__dirname + '/public/img/error_404.png')
});

APP.set('view engine', 'ejs');



