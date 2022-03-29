const express = require('express');
const router = express.Router();
const { registerValidate } = require('../middlewares/user.middleware');
const { createUser } = require('../services/user/auth/controller/auth.controller');
// const guestMiddleware = require('../src/modules/guestMiddleware');

// router.get('/', main.index);

// ROUTER.get('auth/register', guestMiddleware, createUser);
router.post('/auth/register', registerValidate, createUser);
// ROUTER.post('auth/login', registerValidate, USER.store);


module.exports = router;