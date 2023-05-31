const mysql = require('mysql2');
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'nodejs_demo'
});
module.exports = pool.promise();