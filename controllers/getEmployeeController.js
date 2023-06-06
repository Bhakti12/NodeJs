const Employee = require('../models/employee');
const globalSucessMessage = require('../util/globalSuccessMesssage');

exports.getEmployee = (req,res,next) => {
    Employee.findAll()
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
        res.status(200);
        //return globalSucessMessage.sendResponseGet(302,res);
      })
      .catch(err => 
        res.render(err)
        );
};