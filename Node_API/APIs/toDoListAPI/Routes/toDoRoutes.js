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
      resp.send('task is happening'+JSON.stringify(req));
    });
    
  });
  app.get('/addUser',function(req,res){
    console.log('hitting insert route');
    todoList.insertUser(function(err,req,resp){
      if(err) throw err;
      res.send('data inserted sucessfully');
    });
  });
  // app.route('/tasks')
  //   .get(todoList.list_all_tasks);
  //   .post(todoList.create_a_task);


  // app.route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'});
  });
};