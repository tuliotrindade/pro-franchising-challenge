require("dotenv").config();

const { createProduct } = require('../services/productsServices');

const newProduct = async (req, res) => {
  const { name, price, quantity, ingredients } = req.body;
  const createdBy  = req.id;

  const product = await createProduct({
    name,
    price,
    quantity,
    createdBy,
    ingredients,
  });

  return res.status(201).json({ product });
};

module.exports = {
  newProduct,
}