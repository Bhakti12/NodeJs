const Employee = require('../models/employee');
const globalSuceessmessage = require('../util/globalSuccessMesssage');
const {getEmployeebyId} = require('../services/query');

exports.UpdateEmployee = (req,res,next) => {
    const empId = req.body.empId;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const emailId = req.body.emailId;
    const phoneNumber = req.body.description;
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
        globalSuceessmessage.sendResponse(301,'Employee Updated Sucessfully!!',res);
        res.redirect('employee');
      })
      .catch(err => console.log(err));
};