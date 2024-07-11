import Joi from 'joi'

const createHnSchema = Joi.object({
    firstName: Joi.string().required().messages({
        'string.empty': 'firstname is required.'
    }),
    lastName: Joi.string().required().messages({
        'string.empty': 'lastname is required.'
    }),
    phone: Joi.string().required().pattern(/^[0-9]{10}$/).trim().messages({
        'string.pattern.base': 'Your phone number is invalid.',
        'string.empty': 'phone is required.'
    }),
    email: Joi.string().email({ tlds: false }).required().messages({
        'string.email':'Your email address is invalid.',
        'string.empty': 'email is required.'
    }),
    address: Joi.string().required().messages({
        'string.empty': 'address is required.'
    }),
    drugAllergies: Joi.string().allow(""),
    
    nationality: Joi.string().required().messages({
        'string.empty': 'nationality is required.'
    }),
    gender: Joi.string().required().messages({
        'string.empty': 'gender is required.'
    }),
    birthDate: Joi.string().required().messages({
        'string.empty': 'birthDate is required.'
    }),
})

const validateCreateHn = (input) => {
    const { error } = createHnSchema.validate(input, { abortEarly: false})

    if (error) {
        const result = error.details.reduce((acc,el) => {
            acc[el.path[0]] = el.message
            return acc
        },{})
        // console.dir(error)
        return result
    }
}

export default validateCreateHn