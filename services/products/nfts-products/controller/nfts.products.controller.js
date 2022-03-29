const { createNewNFT, validateProduct } = require("../dao/nfts.products.dao");



const createNFT = (req, res) => {

    // Hace falta hacer comprobaciones acá.

    createNewNFT(req.body, req)
        .then((data) => {
            // Como recibimos el id al hacer el resolve solo lo concatenamos.
            // la data viene envuelta en un objeto, por eso debemos acceder a el data.id.
            res.redirect('/product/detail/' + data.id);
        })
        .catch((error) => {
            // No tenemos comprobaciones pero si lo agregamos los manejamos acá.
            console.log(error)
        })
};

const productValidate = (req, res) => {
        validateProduct(req.params.id)
            .then((data) => {
                console.log(data)
                res.render('product/producto-edicion', {
                    producto: data
                });
            })
            .catch((error) => {
                console.log(error)
                return res.render('product/producto-error-edicion', error);
            })
}


module.exports = {
    createNFT,
    productValidate
}

// module.exports = {
//     createNFT: function(req, res) {

//         // Hace falta hacer comprobaciones acá.

//         createNewNFT(req.body, req)
//             .then((data) => {
//                 // Como recibimos el id al hacer el resolve solo lo concatenamos.
//                 // la data viene envuelta en un objeto, por eso debemos acceder a el data.id.
//                 res.redirect('/product/detail/' + data.id);
//             })
//             .catch((error) => {
//                 // No tenemos comprobaciones pero si lo agregamos los manejamos acá.
//                 console.log(error)
//             })
//     },
//     productValidate: function (req, res) {
//         console.log('aqui llega')
//         validateProduct(req.params.id)
//             .then((data) => {
//                 console.log(data)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })

//         // res.render('product/producto-edicion', {
//         //     producto: data
//         // });
//     },
// }