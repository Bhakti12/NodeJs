const express = require('express');

const router = express.Router();

const employeeController = require('../controllers/employeeController');

router.post('/add-employee',employeeController.AddEmployee);

router.get('/employees',employeeController.getEmployees);

router.get('/employees/:empId',employeeController.getEmployee);

router.post('/update-employee',employeeController.updateEmployee);

router.post('/delete-employee',employeeController.deleteEmployee);

module.exports = router;