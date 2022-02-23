const rescue = require("express-rescue");

const { createProduct, getAll, removeProduct, update } = require('../services/productsServices');

const newProduct = rescue (async (req, res) => {
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
});

const getAllProducts = rescue (async (_req, res) => {
  const allProducts = await getAll();

  return res.status(200).json({ allProducts });
});

const deleteProduct = rescue (async (req, res) => {
  const { id } = req.params;
  const output = await removeProduct(id);
  return res.status(output.code).json({ message: output.message });
});

const updateProduct = rescue (async (req, res) => {
  const { id } = req.params;
  const { name, price, quantity, ingredients } = req.body;
  const data = { name, price, quantity, ingredients};
  const output = await update(id, data);

  if (output.message) {
    return res.status(output.code).json({ message: output.message });
  };

  return res.status(output.code).json(output.updatedProduct);
});

module.exports = {
  newProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
}