import Joi from 'joi'

const searchSchema = Joi.object({
    input: Joi.string().required().trim().messages({
        'string.empty': 'HN or Name is required.'
    }),
})

const validateSearch = (input) => {
    const { error } = searchSchema.validate(input, { abortEarly: false})

    if (error) {
        const result = error.details.reduce((acc,el) => {
            acc[el.path[0]] = el.message
            return acc
        },{})
        // console.dir(error)
        return result
    }
}

export default validateSearch