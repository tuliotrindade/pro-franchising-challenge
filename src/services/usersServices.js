const jwt = require("jsonwebtoken");
const { createUser, findByEmail, updateRole } = require('../models/usersModel');

const create = async (data) => {
  const user = await findByEmail(data.email)
  if (user) {
    return { message: 'email already exists', code: 409 };
  }
  const createdUser = await createUser(data);
  return createdUser;
};

const login = async (email, password) => {
  const user = await findByEmail(email);

  if(user === null ||  user.password !== password) {
    return { message: 'wrong email or password', code: 400 };
  }  

  const { name, _id, role } = user;

  const data = {
    name,
    _id,
    password,
    email,
    role,
  };

  const token = jwt.sign(data, 'temumsegredoaqui');
  return token;
};

const attRole = async (email, role) => {
  const user = await findByEmail(email)
  if(!user) {
    return { message: 'unregistered email', code: 404 };
  }
  await updateRole(email, role);
  return { message: 'the user had the role changed', code: 200 };
}

module.exports = {
  create,
  login,
  attRole,
};