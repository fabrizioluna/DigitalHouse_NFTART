const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE
const session = require('express-session');
const cookies = require('cookie-parser');
const userLoggedMiddleware = require ('./src/modules/userLoggedMiddleware');

const main = require('./src/routes/mainRoutes');
const product = require('./src/routes/productRoutes');
const user = require('./src/routes/userRoutes');
const { dbConnect } = require('./database');

// Conexion a la base de datos.
dbConnect();

app.use(session({
    secret: '4E4654415254',
    resave: true,
    saveUninitialized: true
}
));

app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method')); 
app.use(cookies());

app.use(userLoggedMiddleware);

app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo en el puerto 3000')
});

app.use('/', main);
app.use('/product', product);
app.use('/user', user);

app.use('*', function (req, res) {
    res.sendFile(__dirname + '/public/img/error_404.png')
});

app.set('view engine', 'ejs');