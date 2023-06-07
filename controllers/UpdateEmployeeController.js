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
    body('emailId').isEmail().withMessage('Invalid email!').custom(value => {
      return getEMployee(emailId).then(employee=>{
        if(employee){
          return Promise.reject('Email already exists');
        }
      });
    }).normalizeEmail(),
    body('phoneNumber').matches(/^[1-9][0-9]{9}$/).withMessage('Invalid Format!'),
    (req,res,next) => {
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
      }
    }
    getEmployeebyId(empId)
      .then(emp => {
          emp.firstName = firstName;
          emp.lastName = lastName;
          emp.emailId = emailId;
          emp.phoneNmber = phoneNumber;
        return emp.save();
      })
      .then(result => {
        // console.log('UPDATED');
        return res.status(Message.employee.updated.status).json({message:Message.employee.updated.message});
      })
      .catch(err => console.log(err));
};