import Joi from "joi";

const careerschema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Position applying is required.",
  }),
  quantity: Joi.number().required().positive().messages({
    "number.base": "Quantity is required number.",
    "number.positive": "Quantity must be greater than 0."
  }),
});

const validateCareer = (input) => {
  // ตรวจสอบว่า input เป็น array หรือไม่
  if (Array.isArray(input)) {
    // เก็บ errors ที่เกิดขึ้นในแต่ละ object ใน array
    const errors = input.map((item) => {
      const { error } = careerschema.validate(item, { abortEarly: false });
      if (error) {
        return error.details.reduce((acc, el) => {
            acc[el.path[0]] = el.message;
            return acc;
          }, {})
       
      }
      return null; // ถ้าไม่มี error จะ return null
    }).filter(item => item !== null);

    // ถ้ามี error ใน array ให้ return ตัวแปร errors
    if (errors.length > 0) {
      return errors;
    }
  } else {
    // กรณี input เป็น object (เหมือนเดิม)
    const { error } = careerschema.validate(input, { abortEarly: false });

    if (error) {
      const result = error.details.reduce((acc, el) => {
        acc[el.path[0]] = el.message;
        return acc;
      }, {});
      return result;
    }
  }
};

export default validateCareer;
