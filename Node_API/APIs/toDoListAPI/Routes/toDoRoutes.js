'use strict';
module.exports = function(app) {
  var todoList = require('../Controller/todoListController');
  // console.log(todoList);
  // todoList Routes
  

  app.get('/', function (req, res) {
   res.send('Welcome to API');
  });

  app.get('/tasks',function(req,resp){
    todoList.getAllUsers(function(err,req,res){
      if (err) throw err;
      resp.send(JSON.stringify(req));
    });
    
  });

  app.post('/addUser',function(req,res){
    console.log(req.body);
    todoList.insertUser(req,function(err,req,resp){
      if(err) throw err;
      res.send('data inserted sucessfully');
    });
  });

  app.get('/updateUser',function(req,res){
    console.log('hitting update route');
    todoList.updateUser(function(err,req,resp){
      if(err) throw err;
      res.send('data updated sucessfully');
    });
  });

  app.use('/getUserById',function(req,res){
    var id=req.id;
    todoList.getUserById(id,function(err,req,resp){
      if(err) throw err;
      res.send('data updated successfully');
    });
  });

  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'});
  });
};