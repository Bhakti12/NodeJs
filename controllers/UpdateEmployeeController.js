const Message = require('../util/globalSuccessMesssage');
const {getEmployeebyId} = require('../services/query');

exports.UpdateEmployee = (req,res,next) => {
    const empId = req.body.empId;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const emailId = req.body.emailId;  
    const phoneNumber = req.body.description;
    const password = req.body.password;
    
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