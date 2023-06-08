const Joi = require('joi');

exports.EmployeeValidation = async (req, res, next) => {
    const EmpSchema = Joi.object().keys({
        // email : Joi.string().pattern(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/).messages("string.empty":"Email can not be an empty",
        // "string.pattern.base":"Please enter the valid email address","any.required":"Email is required").required()
      firstName: Joi.string()
        .messages({
          "any.required": "FirstName is required",
        })
        .required(),
      lastName: Joi.string()
        .messages({
          "any.required": "lastName is required",
        })
        .required(),
      emailId: Joi.string()
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
      .required(),
      password : Joi.string()
      .pattern(/^(?=.*[!@#$%^&*_=+-]).{8,12}$/)
      .messages({
        "string.empty": "password number must not be empty",
        "string.pattern.base": "Please enter valid password format!",
        "any.required":"password is required"
      })
      .required()
    })
    
    let options = { abortEarly: false };
    if(req.file){
      console.log("fsvd")
    }
    const { check, error } =  EmpSchema.validate(req.body,options);
    if (error) {
      const errorMessages = error.details.map((err) => err.message);
      console.log(errorMessages);
      return res.status(400).json({
        // Error: errorMessages,
        "error":true,
        "message": errorMessages,
      });
    }
    next();
};