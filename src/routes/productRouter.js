const express = require('express');
const router = express.Router();
const { newProduct, getAllProducts} = require('../controllers/productsControllers');
const authenticationAdmin = require('../middlewares/authenticationAdmin');
const authenticationAllUsers = require('../middlewares/authenticationAllUsers');
const productValidations = require('../middlewares/validations/productValidations')

router.post('/add', authenticationAdmin, productValidations, newProduct);
router.get('/allProducts', authenticationAllUsers, getAllProducts);

module.exports = router