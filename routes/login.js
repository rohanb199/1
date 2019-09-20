const users = require('./users.js');

function userValidation(reqEmail,reqPassword) {
    
    const user = users.find(user => user.email === reqEmail);
    
    const passwordValidation = () => user.password === reqPassword ?
	  {ok: true, data: user } :
	  {ok: false, error: "Wrong password"};
    
    if (!user)
	return {ok: false, error: "User not found"};
    else
	return passwordValidation();
}

module.exports = function(app){
    
    app.post('/login',function(req,res){
	
	const { email, password } = req.body;
	const resObj = userValidation(email,password);
	
	res.json(resObj);
	
    });
    
}
