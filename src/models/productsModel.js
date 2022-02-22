const connection = require("./connection");

const registerProduct = async ({
  name,
  price,
  quantity,
  ingredients,
  createdBy,
}) => {
  const { insertedId } = await connection()
    .then((db) => db.collection('products').insertOne({
      name,
      price,
      quantity,
      createdBy,
      ingredients,
    }));
  
  const createdRecipe = {
    _id: insertedId,
    name,
    price,
    quantity,
    ingredients,
    createdBy,
  };

  return createdRecipe;
};

const allProducts = async () => {
  const products = await connection()
    .then((db) => db.collection('products').find({}).toArray());
  return products;
}

module.exports = {
	registerProduct,
  allProducts,
}