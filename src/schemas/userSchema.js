const Joi = require('joi');

const userSchema = Joi.object({
	id: Joi.string().guid({version: ['uuidv4']}),
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().positive().required()
}).strict();

module.exports = userSchema;
