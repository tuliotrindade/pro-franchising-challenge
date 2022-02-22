const { registerProduct, allProducts } = require('../models/productsModel');

const createProduct = async ({
  name,
  price,
  quantity,
  ingredients,
  createdBy,
}) => {
  const createdProduct = await registerProduct({
    name,
    price,
    quantity,
    createdBy,
    ingredients,
  });

  return createdProduct;
};

const getAll = async () => {
  const products = await allProducts();

  return products;
};

module.exports = {
  createProduct,
  getAll,
}