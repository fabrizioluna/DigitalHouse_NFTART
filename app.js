const express = require('express');
const path = require('path');
const app = express();

app.listen(3004, () =>
    console.log('servidor corrriendo')
);

app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.use(express.static(path.join(__dirname, './public')));





