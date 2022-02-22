const { loginSchema, registerSchema } = require("./schemas");

const validateLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

const validateRegister= (req, res, next) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = {
	validateLogin,
  validateRegister
}