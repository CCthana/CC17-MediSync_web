import Joi from 'joi'

const careerchema = Joi.object({
    firstname: Joi.string().required().messages({
        'string.empty': 'firstname is required.'
    }),
    lastname: Joi.string().required().messages({
        'string.empty': 'lastname is required.'
    }),
    age: Joi.string().required().pattern(/^[0-9]{2}$/).messages({
        'string.pattern.base': 'Your age number is invalid.',
        'string.empty': 'age is required.'
    }),
    phone: Joi.string().required().pattern(/^[0-9]{10}$/).messages({
        'string.pattern.base': 'Your phone number is invalid.',
        'string.empty': 'phone is required.'
    }),
    email: Joi.string().email({ tlds: false }).required().messages({
        'string.email':'Your email address is invalid.',
        'string.empty': 'email is required.'
    }),
    position: Joi.string().required().messages({
        'string.empty': 'position is required.'
    }),
    detail: Joi.string()
})

const validateFormCareer = (input) => {
    const { error } = careerchema.validate(input, { abortEarly: false})

    if (error) {
        const result = error.details.reduce((acc,el) => {
            acc[el.path[0]] = el.message
            return acc
        },{})
        // console.dir(error)
        return result
    }
}

export default validateFormCareer