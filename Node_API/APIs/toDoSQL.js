 var mysql=require('mysql');
 var con = mysql.createConnection({
  host:'localhost',
 user:'root',
 password:'ajay',
 database:'test'
});

module.exports = con;