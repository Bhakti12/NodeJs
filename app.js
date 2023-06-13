const express = require('express');
//const readline = require('readline');
const sequelize = require('./util/database');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const Emproutes = require('./routes/employeeRoutes');

dotenv.config();
console.log('JWT_SECRET_KEY',process.env.JWT_SECRET_KEY);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Emproutes);

sequelize.sync({force:true}).then(console.log('connected successfully!!!')).catch(err=>console.log(err));

app.listen(3000);