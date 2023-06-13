const Employee = require('../models/employee');
const Message = require('../util/globalSuccessMesssage');
const paginate = require('sequelize-paginate');
const {getEmployee} = require('../services/query');
const { Op } = require('sequelize');

exports.getEmployee = (req,res,next) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  try{
    const offset = (page - 1) * limit;
    const employees = Employee.findAndCountAll({
      offset,
      limit
    })
    getEmployee().then(
      emp =>{
        res.render('employee',{
          emp: emp,
          path: 'employee'
        });
      })
  }
  catch(err){
    console.log(err);
  }
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
