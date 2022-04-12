//228 Handling Requests and Responses_ the GET Request

const express = require('express');
const app = express();

app.get("/", function(request , response){ //  "/" is the root directory
  console.log(request); //  this will log all the information on that request
  response.send("<h1>Hello World</h1>");
})

app.listen(3000, function() {
  console.log('Server started on port 3000');
})