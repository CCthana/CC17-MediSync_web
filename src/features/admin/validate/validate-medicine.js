import Joi from 'joi'

const medicineSchema = Joi.object({
    name: Joi.string().required().trim().messages({
        'string.empty': 'Name is required.'
    }),
    price: Joi.number().required().positive().messages({
        "number.base": "weight is required number.",
        "number.positive": "weight must be greater than 0."
      }),
    stock: Joi.number().required().positive().messages({
        "number.base": "weight is required number.",
        "number.positive": "weight must be greater than 0."
      }),
})

const validateMedicine = (input) => {
    const { error } = medicineSchema.validate(input, { abortEarly: false})

    if (error) {
        const result = error.details.reduce((acc,el) => {
            acc[el.path[0]] = el.message
            return acc
        },{})
        // console.dir(error)
        return result
    }
}

export default validateMedicine