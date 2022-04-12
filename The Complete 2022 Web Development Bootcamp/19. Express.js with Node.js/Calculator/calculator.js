const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true})); //Video - 235 Processing Post Requests with Body Parser

app.get("/", function(req, res){
    //res.send("Hello");
    res.sendFile(__dirname +"/index.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("Thanks result of the calculation is: " + result);
});

app.listen(3000, function(){
    console.log("Running");
});