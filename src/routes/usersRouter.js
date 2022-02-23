const express = require('express');
const router = express.Router();
const { create, login, changeRole } = require('../controllers/usersControllers');
const { validateLogin, validateRegister } = require('../middlewares/validations/usersValidations');
const authenticationAdmin = require('../middlewares/authenticationAdmin')

router.post('/register', validateRegister, create);

router.post('/login', validateLogin, login);

router.post('/changeRole', authenticationAdmin, changeRole)

module.exports = router;