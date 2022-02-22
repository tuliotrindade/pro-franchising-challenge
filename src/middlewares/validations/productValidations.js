const createProductSchema = require('./schemas/productsSchemas');

module.exports = async (req, res, next) => {
  const { error } = createProductSchema.validate(req.body);

  if (error) {
    return res.status(400).send({ message: error.message });
  }

  next();
};