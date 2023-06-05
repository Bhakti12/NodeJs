const Employee = require('../models/employee');

exports.getAddEmployee = (req,res,next) => {
    res.render('EditEmployee', {
        path: '/',
        editing: false
    });
};

exports.postAddEmployee = (req,res,next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.firstName;
  const emailId = req.body.emailId;
  const phoneNumber = req.body.phoneNumber;
  Employee
    .create({
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      phoneNumber: phoneNumber
    })
    .then(result => {
      // console.log(result);
      console.log('Created');
      res.redirect('/employee');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditEmployee = (req,res,next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const empId = req.params.empId;
  Employee
    .get({ where: { id: empId } })
    .then(employee => {
      const emp = employee[0];
      if (!emp) {
        return res.redirect('/');
      }
      res.render('/EditEmployee', {
        path: '/EditEmployee',
        editing: editMode,
        employee: employee
      });
    })
    .catch(err => console.log(err));
};

exports.postEditEmployee = (req,res,next) => {
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
      console.log('UPDATED');
      res.redirect('/employee');
    })
    .catch(err => console.log(err));
};

exports.getEmployee = (req,res,next) => {
    Employee.getEmployee()
    .then(emp => {
      res.render('/employee', {
        emp: emp,
        path: '/employee'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteEmployee = (req,res,next) => {
  const empId = req.body.empId;
  Employee.findByPk(empId)
    .then(emp => {
      return emp.destroy();
    })
    .then(result => {
      console.log('DESTROYED');
      res.redirect('/employee');
    })
    .catch(err => console.log(err));
};