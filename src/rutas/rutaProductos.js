const productosControlador = require("../controles/productos")

const express = require("express");
const routers = express.Router();

routers.get('/producto',productosControlador.producto);
routers.get('/marketplace',productosControlador.marketplace);

// router.get('/detalle/:id',platosController.detail)

module.exports = routers;