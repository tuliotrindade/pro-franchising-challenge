const Joi = require("joi");

const ingredientsSchema = Joi.object().keys({
  name: Joi.string().min(3).required(),
  unity: Joi.string().min(1).required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
});

module.exports = Joi.object({
  name: Joi.string().min(4).required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
  ingredients: Joi.array().items(ingredientsSchema).required(),
});

