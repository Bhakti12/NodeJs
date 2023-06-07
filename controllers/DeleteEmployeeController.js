const Employee = require('../models/employee');
const Message = require('../util/globalSuccessMesssage');
const {deleteEmployee} = require('../services/query');

exports.getEmployeeById = (req,res,next) => {
  const empId = req.params.empId;
  Employee
    .findAll({ where: { id: empId } })
    .then(employee => {
      const emp = employee[0];
      res.render('delete-employee', {
        path: 'delete-employee',
        employee: emp
      });
      return res.status(Message.error.notFound.status).json({message:Message.error.notFound.message});      
    })
    .catch(err => 
      console.log(err)
    );
};

exports.DeleteEmployeebyId = (req,res,next) => {
    const empId = req.params.empId;
    deleteEmployee(empId)
      .then(result => {
        //console.log('DESTROYED');
        res.status(Message.employee.deleted.status).json({message : Message.employee.deleted.message});
      })
      .catch(err => console.log(err));
};