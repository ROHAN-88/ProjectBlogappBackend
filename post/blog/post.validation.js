import Joi from "joi";

export const postValidation = Joi.object({
  title: Joi.string().required().min(2).max(100),
  text: Joi.string().required().min(5).max(2000),
  imageUrl: Joi.string().allow(null, ""),
  imageType: Joi.string().allow(null, ""),
});
