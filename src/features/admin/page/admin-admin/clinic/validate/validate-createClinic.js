import Joi from 'joi'

const createSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.empty': 'name clinic is required.'
    }),
    detail: Joi.string().required().messages({
        'string.empty': 'detail is required.'
    }),
    location: Joi.string().required().allow(null).messages({
        'string.empty': 'location is required.'
    }),
    fileCover: Joi.allow(null),
    file: Joi.allow(null),
    id: Joi.optional()
})

const validateCreateClinic = (input) => {
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

export default validateCreateClinic