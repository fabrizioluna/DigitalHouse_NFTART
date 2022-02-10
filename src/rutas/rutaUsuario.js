const usuarioControlador = require("../controles/usuario")

const express = require("express");
const routers = express.Router();

routers.get('/usuario',usuarioControlador.usuario);
routers.get('/cart',usuarioControlador.cart);

// router.get('/detalle/:id',platosController.detail)

module.exports = routers;