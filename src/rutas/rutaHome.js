const homeControlador = require("./../controles/home")

const express = require("express");
const routers = express.Router();

routers.get('/',homeControlador.index);

// routers.get('/marketplace',productosControlador.marketplace);
// router.get('/detalle/:id',platosController.detail)

module.exports = routers;