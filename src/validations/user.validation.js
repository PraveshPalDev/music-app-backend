import Joi from "joi";

const baseRegisterSchema = Joi.object({
  firstName: Joi.string().trim().min(2).max(50).required(),
  lastName: Joi.string().trim().min(2).max(50).required(),
  email: Joi.string().email().trim().required(),
  password: Joi.string().min(6).required(),
  gender: Joi.string().valid("male", "female", "other").required(),
  profileImage: Joi.string().uri().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().min(6).required(),
});

export const registerValidation = (data) => {
  const { error, value } = baseRegisterSchema.validate(data);
  if (error) {
    const cleanMessage = error.details[0].message.replace(/"/g, "");
    return { error: cleanMessage };
  }
  return { value };
};

export const loginValidation = (data) => {
  const { error, value } = loginSchema.validate(data);
  if (error) {
    const cleanMessage = error.details[0].message.replace(/"/g, "");
    return { error: cleanMessage };
  }
  return { value };
};
