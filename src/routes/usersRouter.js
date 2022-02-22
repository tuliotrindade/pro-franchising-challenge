const express = require('express');
const router = express.Router();
const { create, login } = require('../controllers/usersControllers');
const { validateLogin, validateRegister } = require('../middlewares/validations/usersValidations')

router.post('/register', validateRegister, create);

router.post('/login', validateLogin, login);

module.exports = router;