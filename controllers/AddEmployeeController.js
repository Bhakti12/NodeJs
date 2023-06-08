const Message = require('../util/globalSuccessMesssage');
const { AddEmployee , getEMployee } = require('../services/query');
const { check , validationResult } = require('express-validator');

console.log("coming in this");

exports.getAddEmployee = (req,res,next) => {
    res.render('EditEmployee', {
        path: '/',
        editing: false
    });
};

// exports.ValidationRulesfirstName = [
//   check('firstName','first name is required').notEmpty(),
//   check('firstName','first name must be between 2 to 30 lines').isLength({ min:2,max:30 })  
// ];

// exports.ValidationRuleslastName = [
//   check('lastName','last name is required').notEmpty(),
//   check('lastName','last name must be between 2 to 30 lines').isLength({ min:2,max:30 })
// ];

// exports.ValidationRulesemailId = [
//   check('emailId','email is required').notEmpty(),
//   check('emailId','Invalid email format!').isEmail().normalizeEmail()
// ];

// exports.ValidationRulesphoneNumber = [
//   check('phoneNumber','phone number is required').notEmpty(),
//   check('phoneNumber','Invalid phone number format').matches(/^[1-9][0-9]{9}$/)
// ];

// exports.ValidationRulesPassword = [
//   check('password','password is required').notEmpty(),
//   check('password','Invalid format of password!').matches(/^(?=.*[!@#$%^&*_=+-]).{8,12}$/),
//   check('password','password must be minimum 8 or maximum 12 characters').isLength({min:8,max:12})
// ];

exports.AddEmployee = (req,res,next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const emailId = req.body.emailId;
  const phoneNumber = req.body.phoneNumber;
  const password = req.body.password;
  
  console.log(firstName,lastName,emailId,phoneNumber,password);
  //console.log(body(firstName));

  // const errors = validationResult(req);
  // //console.log(errors);
  // if(!errors.isEmpty()){
  //   //console.log(errors.array());
  //   return res.status(400).json({errors:errors.array()});
  // }

  getEMployee(emailId)
    console.log(firstName,lastName,emailId,phoneNumber,password);
    AddEmployee(firstName,lastName,emailId,phoneNumber,password)
    .then(result => {      
    return res.status(Message.employee.created.status).json({message : Message.employee.created.message});
    })
    .catch(err => {
      console.log(err);
    });
};