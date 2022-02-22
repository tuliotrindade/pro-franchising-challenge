const connection = require("./connection");
const { ObjectId } = require("mongodb");

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
};

const findProduct = async (id) => {
  const product = await connection()
    .then((db) => db.collection('products').findOne({ _id: ObjectId(id) }));
  return product;
}

const deleteProduct = async (id) => {
  await connection()
    .then((db) => db.collection('products').deleteOne({ _id: ObjectId(id) }));
};

module.exports = {
	registerProduct,
  allProducts,
  deleteProduct,
  findProduct,
}