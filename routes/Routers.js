module.exports = function(app,path){
    require('./login.js')(app);
    require('./kittens.js')(app,path);
    require('./index.js')(app,path);
}
