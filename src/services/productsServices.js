const { registerProduct } = require('../models/productsModel');

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

module.exports = {
  createProduct,
}