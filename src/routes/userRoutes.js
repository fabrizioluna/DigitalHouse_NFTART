const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const USER = require('../controllers/userController');

ROUTER.get('/', USER.profile);
ROUTER.post('/register', USER.register);

module.exports = ROUTER;