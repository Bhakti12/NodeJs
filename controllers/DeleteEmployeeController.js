const Employee = require('../models/employee');
const Message = require('../util/globalSuccessMesssage');
const {deleteEmployee} = require('../services/query');

exports.DeleteEmployeebyId = (req,res,next) => {
    const empId = req.body.empId;
    deleteEmployee(empId)
      .then(result => {
        //console.log('DESTROYED');
        res.status(Message.employee.deleted.status).json({message : Message.employee.deleted.message});
      })
      .catch(err => console.log(err));
};