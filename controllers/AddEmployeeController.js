const Employee = require('../models/employee');
const Message = require('../util/globalSuccessMesssage');
const {AddEmployee} = require('../services/query');

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

  Employee.findOne({ where: {emailId} })
    AddEmployee(firstName,lastName,emailId,phoneNumber)
    .then(result => {
      // console.log(result);
    //   console.log('Created');      
    return res.status(Message.employee.created.status).json({message : Message.employee.created.message});
    })
    .catch(err => {
      console.log(err)
    });
};