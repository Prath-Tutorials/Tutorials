const express = require("express");           //npm i express
const bodyParser = require("body-parser");    //npm i body-parser
const request = require("request");           //npm i request
const https = require("https");

const app = express();   // new instance of Express

app.use(express.static("public"));  // This is needed for the website to access files like images and css. 'public' is the name of the folder
app.use(bodyParser.urlencoded({extended:true}));


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});


app.post("/", function(req, res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    console.log(firstName, lastName, email);

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LANME: lastName
                }

            }

        ]
    };

    const jsonData = JSON.stringify(data);
    const listID = "a88e2a321a"; // Mail Chimp unique List ID
    const url = "https://us14.api.mailchimp.com/3.0/lists/" + listID

    const options = {
        method: "POST",
        auth: "prathep:79e6fdd9d58caad20028752752cd0acb-us14"
    }

    const request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();

});

//API KEY - 79e6fdd9d58caad20028752752cd0acb-us14



