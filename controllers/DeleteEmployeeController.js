const Employee = require('../models/employee');
const globalSuccessMesssage = require('../util/globalSuccessMesssage');
const {deleteEmployee} = require('../services/query');

exports.DeleteEmployeebyId = (req,res,next) => {
    const empId = req.body.empId;
    deleteEmployee(empId)
      .then(result => {
        //console.log('DESTROYED');
        res.redirect('employee');
        return globalSuccessMesssage.sendResponseDelete(201,'Employee sucessfully deleted',res);
      })
      .catch(err => console.log(err));
};