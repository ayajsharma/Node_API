// var sql=require('mysql');
var path = require('path');
var db=require('../Models/modelToDo'); 
// console.log(db);
//create class
 var Strain = {
//function to query all items
  getAllUsers : function (callback) {
    // console.log(JSON.parse(req));
    db.getAllUsers(function(err,task,res) {
      // console.log('working bi***es');
      if(err) return callback(err, null);
        
      return callback(null, task);
    });
    // console.log("abc3");
  },
// };

  insertUser : function(callback){
    console.log('hits controller insert');
  	db.insertUser(function(err,task){
  		if(err)
  			res.send(err);
  		// console.log(task.message);
  		return callback(null, task);
  	});
  },
  updateUser : function(callback){
    console.log('hits controller update');
    db.updateUser(function(err,task){
      if(err)
        res.send(err);
      // console.log(task.message);
      return callback(null, task);
    });
  }
};
module.exports=Strain;




// var Task=sql.model('users');
// // var Task = path.basename('../toDoSQL');

// exports.list_all_tasks = function(req, res) {
//   Task.find({}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };




// exports.create_a_task = function(req, res) {
//   var new_task = new Task(req.body);
//   new_task.save(function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.read_a_task = function(req, res) {
//   Task.findById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.update_a_task = function(req, res) {
//   Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };

// exports.delete_a_task = function(req, res) {

//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// };
