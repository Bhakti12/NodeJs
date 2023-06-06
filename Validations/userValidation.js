const Joi = require('joi');

exports.EmployeeValidation = (req, res, next) => {
    const EmpSchema = Joi.object().keys({
        // email : Joi.string().pattern(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/).messages("string.empty":"Email can not be an empty",
        // "string.pattern.base":"Please enter the valid email address","any.required":"Email is required").required()
       email: Joi.string()
      .pattern(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
      .messages({
        "string.empty": "Email can not be an empty",
        "string.pattern.base": "Please enter the valid email address",
        "any.required": "Email is required",
      })
      .required(),
      phoneNumber : Joi.string()
      .pattern(/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
      .messages({
        "string.empty": "Phone Number should not be empty",
        "string.pattern.base": "Please enter valid phone number",
        "any.required":"phone number is required"
      })
      .required()
    })
};