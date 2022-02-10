const { path } = require("path");
require(path)

const usuario = {
    cart: (req,res)=>{
        res.render("cart");
    },
    
    usuario: (req,res)=>{
    res.render("usuario");
    },
}


module.exports= usuario