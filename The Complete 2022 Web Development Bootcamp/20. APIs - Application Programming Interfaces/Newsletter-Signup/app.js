const express = require("express");           //npm i express
const bodyParser = require("body-parser");    //npm i body-parser
const request = require("request");           //npm i request

const app = express();                        // new instance of Express


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});



app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});
