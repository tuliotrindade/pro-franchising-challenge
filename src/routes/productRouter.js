const express = require('express');
const router = express.Router();
const { newProduct, getAllProducts, deleteProduct, updateProduct } = require('../controllers/productsControllers');
const authenticationAdmin = require('../middlewares/authenticationAdmin');
const authenticationAllUsers = require('../middlewares/authenticationAllUsers');
const productValidations = require('../middlewares/validations/productValidations');

router.post('/add', authenticationAdmin, productValidations, newProduct);
router.get('/allProducts', authenticationAllUsers, getAllProducts);
router.delete('/delete/:id', authenticationAdmin, deleteProduct);
router.put('/update/:id', authenticationAdmin, updateProduct);

module.exports = router;