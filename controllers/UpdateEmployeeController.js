const Employee = require('../models/employee');
const Message = require('../util/globalSuccessMesssage');
const {getEmployeebyId} = require('../services/query');
const { body , validationResult } = require('express-validator');
const validator = require('validator');

exports.UpdateEmployee = (req,res,next) => {
    const empId = req.body.empId;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const emailId = req.body.emailId;
    const phoneNumber = req.body.description;
    const password = req.body.password;
    
    body('firstName').notEmpty().withMessage('Firstname is required').isLength({ min:2,max:30 }).withMessage('First name must be between 2 and 30 characters'),
    body('lastName').notEmpty().withMessage('Lastname is required').isLength({ min:2,max:30 }).withMessage('First name must be between 2 and 30 characters'),
    body('emailId').notEmpty().withMessage('email is required').isEmail().withMessage('Invalid email format!').normalizeEmail(),
    body('phoneNumber').notEmpty().withMessage('phone number is required').matches(/^[1-9][0-9]{9}$/).withMessage('Invalid phone number format'),
    body('password').notEmpty().withMessage('password is required').matches(/^(?=.*[!@#$%^&*_=+-]).{8,12}$/).withMessage('Invalid format of password!').isLength({min:8,max:12}).withMessage('password must be minimum 8 or maximum 12 characters');

    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
      console.log(errors.array());
      return res.status(400).json({errors:errors.array()});
    }

    getEmployeebyId(empId)
      .then(emp => {
          emp.firstName = firstName;
          emp.lastName = lastName;
          emp.emailId = emailId;
          emp.phoneNmber = phoneNumber;
          emp.password = password;
        return emp.save();
      })
      .then(result => {
        // console.log('UPDATED');
        return res.status(Message.employee.updated.status).json({message:Message.employee.updated.message});
      })
      .catch(err => console.log(err));
};