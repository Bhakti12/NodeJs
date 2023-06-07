const express = require('express');
const AddEmployeeController = require('../controllers/AddEmployeeController');
const getEmployeeController = require('../controllers/getEmployeeController');
const UpdateEmployeeController = require('../controllers/UpdateEmployeeController');
const DeleteEmployeeController = require('../controllers/DeleteEmployeeController');
const router = express.Router();

router.get('/', AddEmployeeController.getAddEmployee);

router.get('/employee', getEmployeeController.getEmployee);

router.post('/add-employee', AddEmployeeController.AddEmployee);

router.get('/EditEmployee/:empId', getEmployeeController.getEmployeeById);

router.post('/EditEmployee', UpdateEmployeeController.UpdateEmployee);

router.post('/delete-employee', DeleteEmployeeController.DeleteEmployeebyId);

module.exports = router;