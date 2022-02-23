const { registerProduct, allProducts, deleteProduct, edit, findProduct } = require('../models/productsModel');

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
    return { code: 404, message:'product not found' };
  }
  await deleteProduct(id);
  return { code: 200, message:'product deleted' };
};

const update = async (id, data) => {
  const product = await findProduct(id);
  if(!product) {
    return { code: 404, message:'product not found' };
  };
  const updatedProduct = await edit(id, data);
  if(!updatedProduct) {
    return { code: 404, message:'algo deu errado' };
  }
  return { code: 200, message: 'product has been updated' };
};

module.exports = {
  createProduct,
  getAll,
  removeProduct,
  update,
}