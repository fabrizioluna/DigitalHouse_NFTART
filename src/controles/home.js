const { path } = require("path");
require(path)

const home = {
    index: (req,res)=>{
        res.render("home");
    },
}


module.exports= home