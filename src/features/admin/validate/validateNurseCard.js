import Joi from 'joi'

const nurseSchema = Joi.object({
    bloodPressure: Joi.string().required().trim().messages({
        'string.empty': 'bloodPressure is required.'
    }),
    temperature: Joi.string().required().trim().messages({
        'string.empty': 'temperature is required.'
    }),
    symptoms: Joi.string().required().trim().messages({
        'string.empty': 'temperature is required.'
    }),
    weight: Joi.number().required().positive().messages({
        "number.base": "weight is required number.",
        "number.positive": "weight must be greater than 0."
      }),
      height: Joi.number().required().positive().messages({
        "number.base": "height is required number.",
        "number.positive": "height must be greater than 0."
      }),
      heartRate: Joi.number().required().positive().messages({
        "number.base": "heartRate is required number.",
        "number.positive": "heartRate must be greater than 0."
      }),
      doctorId: Joi.number().required().positive().messages({
        "number.base": "doctor is required number.",
        "number.positive": "doctor must be greater than 0."
      }),
      id: Joi.number().required().positive().messages({
        "number.base": "doctor is required number.",
        "number.positive": "doctor must be greater than 0."
      })
})

const validateNurse = (input) => {
    const { error } = nurseSchema.validate(input, { abortEarly: false})

    if (error) {
        const result = error.details.reduce((acc,el) => {
            acc[el.path[0]] = el.message
            return acc
        },{})
        // console.dir(error)
        return result
    }
}

export default validateNurse