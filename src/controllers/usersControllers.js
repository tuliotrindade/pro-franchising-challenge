const usersService = require('../services/usersServices');

const create = async (req, res) => {
  const { name, email, password } = req.body;
  const createdUser = await usersService.create({ name, email, password });
  return res.status(201).json(createdUser);
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const { _id, role } = await usersService.login(email);
  const data = { email, password, _id, role };
  const token = jwt.sign(data, 'temumsegredoaqui');
  res.status(200).send({ token });
};

module.exports = {
  create,
  login,
};