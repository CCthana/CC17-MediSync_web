import Joi from 'joi'

const passwordSchema = Joi.object({
    hn: Joi.string().required().messages({
        'string.empty': 'hn is required.'
    }),
    password: Joi.string().required().messages({
        'string.empty': 'password is required.'
    })
})

const validatePassword = (input) => {
    const { error } = passwordSchema.validate(input, { abortEarly: false})

    if (error) {
        const result = error.details.reduce((acc,el) => {
            acc[el.path[0]] = el.message
            return acc
        },{})
        // console.dir(error)
        return result
    }
}

export default validatePassword