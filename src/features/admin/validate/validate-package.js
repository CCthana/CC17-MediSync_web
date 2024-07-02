import Joi from "joi";

const packageSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Package Name is required.",
  }),
  detail: Joi.string().required().messages({
    "string.empty": "Package Detail is required.",
  }),
  promotionDate: Joi.string().allow("").optional(),
  price: Joi.string().allow("").optional(),
  image: Joi.optional(),
});

const validateFormPackage = (input) => {
  const { error } = packageSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateFormPackage;
