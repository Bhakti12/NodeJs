const Employee = require('../models/employee');
const globalSucessMessage = require('../util/globalSuccessMesssage');

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
  Employee
    .create({
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      phoneNumber: phoneNumber
    })
    .then(result => {
      // console.log(result);
    //   console.log('Created');
    res.redirect('/employee');
    res.status(200).send({
        message: "Employee is Added Successfully!!"
    })
      
    //   return globalSucessMessage.sendResponse(201,'Employee is Added Successfully!!',res);
    })
    .catch(err => {
      console.log(err)
    });
};