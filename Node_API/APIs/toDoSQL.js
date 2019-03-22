 var mysql=require('mysql');
 require('dotenv').config();
 var con = mysql.createConnection({
  host:'localhost',
 user:process.env.sql_user,
 password:'',
 database:process.env.sql_db
});

module.exports = con;