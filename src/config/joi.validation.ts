import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  APP_PORT: Joi.number().default(3001),
  MONGO_URL: Joi.string().required(),
  REGISTER_URL: Joi.string().required(),
});
