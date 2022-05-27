<<<<<<< HEAD
const express = require('express');
const router = express.Router();

const main = require('../controllers/mainController');

router.get('/', main.index);

module.exports = router;
=======
const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const MAIN = require('../controllers/mainController');

ROUTER.get('/', MAIN.index);

module.exports = ROUTER;
>>>>>>> ab59042e32d0a074f2570ba1c6c1824c2c6c532b
