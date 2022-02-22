const jwt = require("jsonwebtoken");
const { createUser, findByEmail } = require('../models/usersModel');

const create = async (data) => {
  const user = await findByEmail(data.email)
  if (user) {
    return { message: "email already exists", code: 409 };
  }
  const createdUser = await createUser(data);
  return createdUser;
};

const login = async (email, password) => {
  const user = await findByEmail(email);

  if(user === null ||  user.password !== password) {
    return { message: "wrong email or password", code: 400 };
  }  

  const { name, _id } = user;

  const data = {
    name,
    _id,
    password,
    email,
  };

  const token = jwt.sign(data, 'temumsegredoaqui');
  return token;
};

module.exports = {
  create,
  login,
};