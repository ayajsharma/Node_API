var express = require('express');
var bodyParser= require('body-parser');
var sql = require("mysql");
var app = express();
const morgan = require('morgan');
// var Task = require('./toDoListAPI/Models/modelToDo');
var route=express.Router();
// var db = 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
	.use(morgan());

var routes = require('./toDoListAPI/Routes/toDoRoutes'); //importing route
routes(app);

// app.set('view engine', 'html');
// app.use(express.static(__dirname + '/public'));
// app.set('views', __dirname + '/views');


// app.use(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// });

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example API listening at http://%s:%s", host, port)
});