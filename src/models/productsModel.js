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

const edit = async (id, data) => {
  let { name, price, quantity, ingredients } = data;
  const {
    name: oldName,
    price: oldPrice,
    quantity: oldQuantity,
    ingredients: oldIngredients,
    createdBy,
  } = findProduct(id);

  if (name === undefined || null) {
    name = oldName;
  };
  if (price === undefined || null) {
    price = oldPrice
  };
  if (quantity === undefined || null) {
    quantity = oldQuantity;
  };
  if (ingredients === undefined || null) {
    ingredients = oldIngredients;
  };
  const updatedProduct = await connection()
    .then((db) => db.collection('products').updateOne(
    { _id: ObjectId(id) },
    {
      $set: {
        name: name,
        price: price,
        quantity: Number(quantity),
        ingredients,
        createdBy: createdBy
      },
    }
  ));
  
  return updatedProduct;
}

module.exports = {
	registerProduct,
  allProducts,
  deleteProduct,
  findProduct,
  edit,
};