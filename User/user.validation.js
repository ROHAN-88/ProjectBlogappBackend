import Joi from "joi";

export const userValidationRegister = Joi.object({
  firstName: Joi.string().required().min(1),
  lastName: Joi.string().required().min(1),
  email: Joi.string().trim().required(),
  password: Joi.string()
    // .pattern(
    //   new RegExp(
    //     "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[a-zA-Zd@$!%*?&]{8,20}$"
    //   )
    // )
    .min(8),
  pictureUrl: Joi.string().allow(null, ""),
  friends: Joi.array().items(Joi.string().trim().lowercase()),
  location: Joi.string().allow(null, ""),
  bio: Joi.string().allow(null, ""),
  fbLinks: Joi.string().allow(null, ""),
  instaLinks: Joi.string().allow(null, ""),
  linkedLinks: Joi.string().allow(null, ""),
  youtubeLinks: Joi.string().allow(null, ""),
  githubLinks: Joi.string().allow(null, ""),
  viewedProfile: Joi.number().allow(null, 0),
  impressions: Joi.number().allow(null, 0),
});

export const userLoginValdation = Joi.object({
  email: Joi.string().trim().required(),
  password: Joi.string(),
});
