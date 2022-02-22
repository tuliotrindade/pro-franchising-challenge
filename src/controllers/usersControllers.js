const usersService = require('../services/usersServices');

const create = async (req, res) => {
  const { name, email, password } = req.body;
  const output = await usersService.create({ name, email, password });
  if(output.message) {
    return res.status(output.code).json({ messade:output.message });
  }
  return res.status(201).json(output);
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const output = await usersService.login(email, password);
  if(output.message) {
    return res.status(output.code).json({ message: output.message });
  }
  return res.status(200).json(output);
};

module.exports = {
  create,
  login,
};