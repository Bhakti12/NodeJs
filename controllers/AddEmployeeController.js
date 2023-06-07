const Employee = require('../models/employee');
const globalSucessMessage = require('../util/globalSuccessMesssage');
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
  .then((existingEmailId)=>{
    if(existingEmailId){
      return res.status(400).json({message:'Email id is already exists'});
    }
    AddEmployee(firstName,lastName,emailId,phoneNumber)
    .then(result => {
      // console.log(result);
    //   console.log('Created');
    res.redirect('/employee');      
    return globalSucessMessage.sendResponse(201,'Employee is Added Successfully!!',res);
    })
    .catch(err => {
      console.log(err)
    });
  }).catch(err => {
    console.error('Error checking if email id exists');
    res.status(500).json({message:'Internal server error'});
  });
};