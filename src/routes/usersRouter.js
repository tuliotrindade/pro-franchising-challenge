const express = require('express');
const router = express.Router();
const { create, login, changeRole } = require('../controllers/usersControllers');
const { validateLogin, validateRegister } = require('../middlewares/validations/usersValidations');
const authentication = require('../middlewares/authentication')

router.post('/register', validateRegister, create);

router.post('/login', validateLogin, login);

router.post('/changeRole', authentication, changeRole)

module.exports = router;