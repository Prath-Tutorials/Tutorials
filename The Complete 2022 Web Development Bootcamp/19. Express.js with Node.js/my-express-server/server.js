
const express = require('express');
const app = express();

app.get("/", function(req , res){ //  "/" is the root directory
  console.log(req); //  this will log all the information on that request
  res.send("<h1>Hello World</h1>");
})


app.get("/contact", function(req , res){ //  "/" is the root directory
  console.log(req); //  this will log all the information on that request
  res.send("<h1>Contact me at: 555-555-5555</h1>");
})

app.get("/aboutme", function(req , res){ //  "/" is the root directory
  console.log(req); //  this will log all the information on that request
  res.send("<h1>Hi, I'm Prathep. I'm a programmer.");
})

app.listen(3000, function() {
  console.log('Server started on port 3000');
})