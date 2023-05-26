const http = require('http');
const express = require('express');

///with routes
const app = express();

app.use('/',(req,res,next)=>{//default path
    console.log('Always runs')
    next();
});

app.use('/register',(req,res,next)=>{
    console.log('another Middleware');
    res.send('<h1>Register</h1>');
});

app.use('/',(req,res,next)=>{//default path
    console.log('Middleware')
    res.send('<h1>Express</h1>');
});

app.listen(3000);