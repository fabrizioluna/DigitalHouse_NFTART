const { path } = require("path");
require(path)

const productos = {
    producto: (req,res)=>{
        res.render("producto");
    },
    
    marketplace: (req,res)=>{
    res.render("marketplace");
    },
}

// cart: (req,res)=>{
//     res.render("cart");
//     },
// }


module.exports= productos