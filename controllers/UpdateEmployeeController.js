const Employee = require('../models/employee');
const globalSuceessmessage = require('../util/globalSuccessMesssage');

exports.UpdateEmployee = (req,res,next) => {
    const empId = req.body.empId;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const emailId = req.body.emailId;
    const phoneNumber = req.body.description;
    Employee.findByPk(empId)
      .then(emp => {
          emp.firstName = firstName;
          emp.lastName = lastName;
          emp.emailId = emailId;
          emp.phoneNmber = phoneNumber;
        return emp.save();
      })
      .then(result => {
        // console.log('UPDATED');
        res.redirect('employee');
        res.status(300).send({
            message: "Employee is updated Successfully!!"
        })
        //return globalSuceessmessage.sendResponse(301,'Employee Updated Sucessfully!!',res);
      })
      .catch(err => console.log(err));
};