const { registerProduct, allProducts, deleteProduct, findProduct } = require('../models/productsModel');

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

const removeProduct = async (id) => {
  const product = await findProduct(id);
  if(!product) {
    return { code: 404, message:'product not found' }
  }
  await deleteProduct(id);
  return { code: 200, message:'product deleted' }
}

module.exports = {
  createProduct,
  getAll,
  removeProduct,
}