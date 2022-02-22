require("dotenv").config();

const { createProduct, getAll } = require('../services/productsServices');

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

const getAllProducts = async (_req, res) => {
  const allProducts = await getAll();

  return res.status(200).json({ allProducts });
};

module.exports = {
  newProduct,
  getAllProducts,
}