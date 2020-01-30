const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');	
const jwt = require('jsonwebtoken');				

module.exports = {
	create: function(req, res, next) {		
		userModel.create({ username: req.body.username, email: req.body.email, password: req.body.password }, function (err, result) {
			console.log(req.body)
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "User added", data: null});
				  
				});
	},

	authenticate: function(req, res, next) {
		userModel.findOne({email:req.body.email}, function(err, userInfo){
					if (err) {
						next(err);
					} else {

						if(userInfo != null && bcrypt.compareSync(req.body.password, userInfo.password)) {

						 const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '2h' }); 

						 res.json({status:"success", message: "user found", data:{user: userInfo, token:token}});	

						}else{

							res.json({status:"error", message: "Invalid email/password", data:null});

						}
					}
				});
	},

}					
