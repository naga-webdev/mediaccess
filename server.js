var express = require('express');
var bp = require('body-parser');
var mongo = require("mongojs");
var db = mongo("login",['log']);
var app = express();

app.use(bp.json());

app.use(express.static(__dirname));

app.get("/",function(req,res){
    console.log("home url");
    res.send();
});

app.get("/validUser/:user",function(req,res){
    var user = req.params.user;
    db.log.findOne({name:user},function(error,docs){
        res.send("ok");
    })
});

app.get("/getUser/:name",function(req,res){
    res.send("Hello");
});

app.post("/registerUser",function(req,res){
    console.log(req.body);
    console.log("registerUser");
    res.send(req.body);
})

app.listen(3000,function(){
    console.log("server is runnig.....");
})