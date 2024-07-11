import Joi from 'joi'

const createSchema = Joi.object({
    firstName: Joi.string().required().messages({
        'string.empty': 'firstname clinic is required.'
    }),
    lastName: Joi.string().required().messages({
        'string.empty': 'detail is required.'
    }),
    birthDate: Joi.string().required().messages({
        'string.empty': 'birthDate is required.'
    }),
    clinicId: Joi.number().allow(null).required().messages({
        'number.base': 'clinic must be a number.',
        'any.required': 'clinic is required.'
    }),
    education: Joi.string().required().messages({
        'string.empty': 'Experience is required.'
    }),
    id: Joi.optional()
})

const validateCreateDoctor = (input) => {
    const { error } = createSchema.validate(input, { abortEarly: false})

    if (error) {
        const result = error.details.reduce((acc,el) => {
            acc[el.path[0]] = el.message
            return acc
        },{})
        // console.dir(error)
        return result
    }
}

export default validateCreateDoctor