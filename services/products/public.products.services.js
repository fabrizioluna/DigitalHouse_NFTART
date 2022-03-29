
// Estos son los servicios públicos.
module.exports = {

    create: function (req, res) {
        res.render("product/producto-creacion");
    },
    
    marketplace: function (req, res) {
        // Como este endpoint usa la db, debemos hacer un dao
        // para hacer que se conecte y solo devuelva la informacion
        // y lo manejamos con una promesa, asi manejamos errores si la db
        // esta vacia o si esta desconectada y no se rompe la aplicacion.
        // res.render("product/producto-marketplace", {productos:productosBD});
    },

    detail: function (req, res) {

        // Toda esta lógica tendria que ir en public.products.dao.js
        // Unicamente dejamos la lógica que no tenga que ver con la db.
        let productoSeleccionado = req.params.id;
        for (p of productosBD) {
            if (p.id==productoSeleccionado) {
                productoEncontrado=p;
                break;
            };
        };

        // for (c of compradoresBD){
        //     if (c.id==productoSeleccionado) {
        //         compradorEncontrado=c;
        //         break;
        //     };
        // };

        res.render("product/producto-detalle", {productos:productoEncontrado/* , compradores:compradorEncontrado */});
    },
}