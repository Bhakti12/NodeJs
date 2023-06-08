const express = require('express');
//const readline = require('readline');
const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const Emproutes = require('./routes/employeeRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Emproutes);

sequelize.sync().then(console.log('connected successfully!!!')).catch(err=>console.log(err));

app.listen(3000);