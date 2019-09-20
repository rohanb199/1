const users = require('./users.js');

module.exports = function(app,path){
    
    app.get('/kittens',function(req,res){

	const userFound = users.find(user => user.secret && user.secret === req.query.secret);

	if (!userFound) 
	    res.status(403).sendFile(path.resolve('./www/forbidden.html'));
	else
	    res.status(200).sendFile(path.resolve('./www/secret.html'));
    });
    
}
