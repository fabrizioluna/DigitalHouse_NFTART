const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const MAIN = require('../controllers/mainController');

ROUTER.get('/', MAIN.index);

module.exports = ROUTER;