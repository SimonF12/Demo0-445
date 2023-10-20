var express = require('express');
var app = express();
// const morgan = require('morgan');
// app.use(morgan('dev'));


    app.get("/", function(req, res){
    res.send("Test response from our web app");
        }); //route format: app.method(path, callback)
app.listen(8080, function () {
    console.log('App listening on port 8080!');
});

//creating additional route
app.get("/test", function(req, res){
var teststring = "This is under /test route ";
res.send(teststring);
});
app.get("/num", function(req, res){
var num = Math.floor((Math.random() * 100) + 1);
res.send("A random number from server is " + num);
});
app.use(express.static("public"));