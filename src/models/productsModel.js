const connection = require("./connection");

const registerProduct = async ({
  name,
  price,
  quantity,
  ingredients,
  createdBy,
}) => {
  const db = await connection();

  const { insertedId } = await db
    .collection("products")
    .insertOne({
      name,
      price,
      quantity,
      createdBy,
      ingredients,
    });
  
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

module.exports = {
	registerProduct,
}