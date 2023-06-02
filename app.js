const express = require('express');
const sequelize = require('./util/database');

const app = express();

const addEmployee = require('./views/addEmployee');

sequelize.sync().then(console.log('connected successfully!!!')).catch(err=>console.log(err));

app.listen(3000);