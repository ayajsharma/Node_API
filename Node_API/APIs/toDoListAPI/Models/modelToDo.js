 var path = require('path');
 var con=require('../../toDoSQL'); //reference of conconnection.js 
 // console.log(con);
var users={
 
	getAllUsers:function(callback){ 
		// con.connect();
			var query_1="select * from users";
			con.query(query_1,function(err,result,field){
				// if(err) throw err;
				console.log("model to do is working ");
				// return JSON.stringify(result);
				if (err) return callback(err, null);
                return callback(null, result);
			});
		
		// con.end();
	},
	insertUser:function(req,callback){
		// con.connect(function(err){
			// if(err) throw err;
			var name=req.body.name;
			var email=req.body.email;
			var username=req.body.username;
			var password=req.body.password;
			var postMan  = {
			  name: name,
			  email: email,
			  username: username,
			  password:password
			};
			console.log(name);
			var query_2="insert into users set ?";
			con.query(query_2,postMan,function(err,res,field){
				if(err) callback(err, null);
				console.log("data inserted sucessfully");
				return callback(null,res);
			});
		// });
	},
	updateUser:function(callback){
		// con.connect(function(err){
			// if(err) throw err;
			var query_2="update users set name = 'Aquaman' where username = 'h5so4' ";
			con.query(query_2,function(err,res,field){
				if(err) callback(err, null);
				console.log("data updated sucessfully");
				return callback(null,res);
			});
		// });
	}
//  getusersById:function(id,callback){
 
// return con.query("select * from users where Id=?",[id],callback);
//  },
//  addusers:function(users,callback){
//  return con.query("Insert into users values(?,?,?,?,?,?,?,?,?)",[users.Id,users.name,users.contact,users.age,users.address,users.email,users.username,users.password,users.parent],callback);
//  },
//  deleteusers:function(id,callback){
//   return con.query("delete from users where Id=?",[id],callback);
//  },
//  updateusers:function(id,users,callback){
//   return con.query("update users set name=?,contact=?,age=?,address=?,email=?,username=?,password=? where Id=?",[users.name,users.contact,users.age,users.address,users.email,users.username,users.password,id],callback);
//  }
 
};
 module.exports=users;