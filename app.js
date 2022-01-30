const express = require('express');
const path = require('path');
const app = express();

app.listen(3004, () =>
    console.log('servidor corrriendo')
);

app.get('/marketplace',(req, res)=>{
    res.sendFile(__dirname + '/views/marketplace.html');
});

app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/usuario',(req,res)=>{
    res.sendFile(__dirname + '/views/usuario.html')
});


app.use(express.static(path.join(__dirname, './public')));





