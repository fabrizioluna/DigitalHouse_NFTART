const EXPRESS = require('express');
const APP = EXPRESS();
const PATH = require('path');

const MAIN = require('./src/routes/mainRoutes');
const PRODUCT = require('./src/routes/productRoutes')

APP.use(EXPRESS.static(PATH.join(__dirname, './public')));

APP.set("view engine", "ejs");

APP.use('/', MAIN);
APP.use('/product', PRODUCT);

APP.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo en el puerto 3000')
});