const connection = require('./connection');

const findByEmail = async (email) => {
  const emailFound = await connection()
    .then((db) => db.collection('users').findOne({ email }));
  return emailFound;
};

const createUser = async (data) => {
  const { name, email, password } = data;

  const { insertedId: _id } = await connection()
    .then((db) => db.collection('users').insertOne({ name, email, password }));
  
  return {
    user: {
      _id,
      name,
      email,
    },
  };
};

module.exports = {
  createUser,
  findByEmail,
};