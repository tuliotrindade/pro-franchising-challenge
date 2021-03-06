const rescue = require("express-rescue");
const usersService = require('../services/usersServices');

const create = rescue (async (req, res) => {
  const { name, email, password } = req.body;
  const role = 'user';
  const output = await usersService.create({ name, email, password, role });
  if(output.message) {
    return res.status(output.code).json({ messade:output.message });
  }
  return res.status(201).json(output);
});

const login = rescue (async (req, res) => {
  const { email, password } = req.body;
  const output = await usersService.login(email, password);
  if(output.message) {
    return res.status(output.code).json({ message: output.message });
  }
  return res.status(200).json({ token: output });
});

const changeRole = rescue (async (req, res) => {
  const { role, email } = req.body;
  const output = await usersService.attRole(email, role);
  return res.status(output.code).json({ message: output.message });
});

module.exports = {
  create,
  login,
  changeRole,
};