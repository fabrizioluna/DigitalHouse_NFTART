const PATH = require('path');
const MULTER = require('multer');

const configuracionImagen = MULTER.diskStorage({
    destination: function (req, file, cb) { 
        cb(null, PATH.join(__dirname, "../../public/img/PRODUCTOS")); 
    },
    filename: function (req, file, cb) { 
        let imageName = Date.now() + file.originalname; 
        cb(null, imageName);
    }
});

const fileFilter = (req, file, cb) => {
    if ((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('jpg')) {
        cb(null, true);
    } else {       
        cb(null, false);
        return cb(new Error('Esto no es una Imagen'));
    }
};

const limits = {
    fileSize: 1024 * 1024 * 1, 
    fieldNameSize: 200
}

const UPLOADFILE = MULTER({ storage: configuracionImagen, fileFilter: fileFilter, limits: limits });

module.exports = UPLOADFILE;