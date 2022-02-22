const { createUser, findByEmail } = require('../models/usersModel');

const create = async (data) => {
	console.log(1)
  const createdUser = await createUser(data);
  console.log(createUser)
  return createdUser;
};

const login = async (email) => {
  const user = await findByEmail(email);
  return user;
};

module.exports = {
  create,
  login,
};