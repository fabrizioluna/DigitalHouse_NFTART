const express = require('express');
const path = require('path');
const home = require('./src/rutas/rutaHome');
const app = express();

app.listen(process.env.PORT || 3000, () =>
    console.log('Servidor corriendo en el puerto 3000')
);

app.use('/', home);


app.use(express.static(path.join(__dirname, './public')));

// Rutas de renderizado
app.set("view engine","ejs")
