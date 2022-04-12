const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true})); //Video - 235 Processing Post Requests with Body Parser

app.get("/", function(req, res){
    //res.send("Hello");
    res.sendFile(__dirname +"/index.html");
});

app.post("/", function(req, res){
    console.log(req.body); // Logs the value that get returned
    console.log(req.body.num1); // Logs the value num1 that get returned
    console.log(req.body.num2); // Logs the value num2 that get returned
    res.send("Thanks for posting that");
});

app.listen(3000, function(){
    console.log("Running");
});