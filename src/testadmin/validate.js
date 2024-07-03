import Joi from "joi";

const careerschema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "name is required.",
  }),
  quantity: Joi.string().required().messages({
    "string.empty": "quantity is required.",
  }),
});

const validateCareer = (input) => {
  const { error } = careerschema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    // console.dir(error)
    return result;
  }
};

export default validateCareer;
