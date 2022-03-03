const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const USER = require('../controllers/userController');

ROUTER.get('/', USER.profile);
ROUTER.get('/edicionRegistro', USER.editProfile);

module.exports = ROUTER;