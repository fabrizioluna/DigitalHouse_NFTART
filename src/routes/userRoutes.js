const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const USER = require('../controllers/userController');

ROUTER.get('/', USER.profile);

module.exports = ROUTER;