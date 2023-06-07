const Message = require('../util/globalSuccessMesssage');
const { AddEmployee , getEMployee } = require('../services/query');
const { body , validationResult } = require('express-validator');
const validator = require('validator');

exports.getAddEmployee = (req,res,next) => {
    res.render('EditEmployee', {
        path: '/',
        editing: false
    });
};

exports.AddEmployee = (req,res,next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.firstName;
  const emailId = req.body.emailId;
  const phoneNumber = req.body.phoneNumber;
  
  body('emailId').isEmail().withMessage('Invalid email').custom(value => {
    return getEMployee(emailId).then(employee=>{
      if(employee){
        return Promise.reject('Email already exists');
      }
    });
  }).normalizeEmail(),

  body('phoneNumber').matches(/^[1-9][0-9]{9}$/).withMessage('Invalid Format!');

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    console.log(errors);
    return res.status(400).json({errors: errors.array()});
  }
  
  getEMployee(emailId)
    AddEmployee(firstName,lastName,emailId,phoneNumber)
    .then(result => {      
    return res.status(Message.employee.created.status).json({message : Message.employee.created.message});
    })
    .catch(err => {
      console.log(err);
    });
};