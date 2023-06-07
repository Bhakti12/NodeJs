const Employee = require('../models/employee');
const Message = require('../util/globalSuccessMesssage');
const {getEmployee} = require('../services/query');

exports.getEmployee = (req,res,next) => {
    getEmployee()
    .then(emp => {
      res.render('employee', {
        emp: emp,
        path: 'employee'
      });
    })
    .catch(err => console.log(err));
};

exports.getEmployeeById = (req,res,next) => {
    const editMode = req.query.edit;
    if (!editMode) {
      return res.redirect('/');
    }
    const empId = req.params.empId;
    Employee
      .findAll({ where: { id: empId } })
      .then(employee => {
        const emp = employee[0];
        if (!emp) {
          return res.redirect('/');
        }
        res.render('EditEmployee', {
          path: 'EditEmployee',
          editing: editMode,
          employee: emp
        });
        return res.status(Message.error.notFound.status).json({message:Message.error.notFound.message});      
      })
      .catch(err => 
        console.log(err)
      );
};