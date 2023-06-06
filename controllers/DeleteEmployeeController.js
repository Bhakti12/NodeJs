const Employee = require('../models/employee');
const globalSuccessMesssage = require('../util/globalSuccessMesssage');

exports.DeleteEmployeebyId = (req,res,next) => {
    const empId = req.body.empId;
    Employee.findByPk(empId)
      .then(emp => {
        return emp.destroy();
      })
      .then(result => {
        //console.log('DESTROYED');
        res.redirect('employee');
        res.status(201).send({
            message: "Employee is deleted Successfully!!"
        })
        //return globalSuccessMesssage.sendResponseDelete(201,'Employee sucessfully deleted',res);
      })
      .catch(err => res.render(err));
};