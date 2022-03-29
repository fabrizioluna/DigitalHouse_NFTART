const fs = require('fs');
const path = require('path');
const localPath = '../../../../src/data/productos.json';
const localStorageProducts = JSON.parse(fs.readFileSync(path.join(__dirname, localPath)),'utf-8');

module.exports = {
    createNewNFT(information, filename){
        return new Promise((resolve, reject) => {
            const createNextId = localStorageProducts[localStorageProducts.length-1].id + 1;
            const nameImage = filename.filename;

            localStorageProducts.push({
                id: createNextId,
                precioUSD: information.USD_price,
                precioETH: information.ETH_price,
                nombre: information.NFT_name,
                categoria: information.category,
                descripcion: information.NFT_description,
                autor: information.NFT_author,
                tematicaAutor: information.NFT_theme,
                imagen: nameImage
            });

            fs.writeFileSync(path.join(__dirname, localPath), JSON.stringify(localStorageProducts,null,' '));
            // Si todo sale bien... entonces devolvemos el createNextId para enviarlo a la vista.
            resolve({ message: 'El nft ha sido creado correctamente', id: createNextId });
        })
    },
    validateProduct(idProduct){
        console.log('el id que recibimos ', idProduct)
        return new Promise((resolve, reject) => {
            const data = localStorageProducts.filter((element) => element.id == idProduct);
            if(data.length == 0) return reject({ error: { text: 'Edit-Error: No se pudo cargar el producto solicitado.' } })
            
            // Si pasa la comprobación retornamos la data 
            return resolve(data);
        })
    }
}