const express = require('express');
const router = express.Router();
const { newProduct } = require('../controllers/productsControllers');
const authentication = require('../middlewares/authentication');
const productValidations = require('../middlewares/validations/productValidations')

router.post('/add',authentication, productValidations, newProduct);

module.exports = router