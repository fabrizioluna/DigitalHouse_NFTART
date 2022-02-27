const express = require('express');
const path = require('path');
const app = express();

app.listen(process.env.PORT || 3000, () =>
    console.log('Servidor corriendo en el puerto 3000')
);

app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/marketplace',(req, res)=>{
    res.sendFile(__dirname + '/views/marketplace.html');
});

app.get('/producto',(req,res)=>{
    res.sendFile(__dirname + '/views/producto.html')
});

app.get('/cart',(req,res)=>{
    res.sendFile(__dirname + '/views/cart.html')
});

app.get('/usuario',(req,res)=>{
    res.sendFile(__dirname + '/views/usuario.html')
});

app.use(express.static(path.join(__dirname, './public')));

app.use(express.static(path.join(__dirname, './views')));