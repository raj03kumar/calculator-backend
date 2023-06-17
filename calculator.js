//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
    // console.log(req.body);
    var num1 = Number(req.body.num1);
    // note req.body.num1 is string we have to convert it to integer
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("Result of "+num1+" + "+num2+" = "+result);
    // we get the result of concatenation as both are strings.
});

app.listen(3000, function(){
    console.log("Server started on port: 3000");
});