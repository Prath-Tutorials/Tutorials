const express = require("express");
const https = require("https"); // A native Node.ja module
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true})); // Necessart code need to parse the body of the data

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    
    console.log(req.body.cityName);
    
});


app.listen(3000, function (){
    console.log("Server is running on port 3000");
});




/* const query = "London"
const apiKey = "2c5b6ba77c18bb9fc702aaac3839885d"
const units = "metric"
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;

https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
        const weatherDataInHexidecimal = data;
        const weatherDataInJSON = JSON.parse(data);
        console.log(weatherDataInJSON);

        const weatherDataInJSONStingify = JSON.stringify(weatherDataInJSON);
        console.log(weatherDataInJSONStingify);

        const weatherValue = weatherDataInJSON.main.temp;
        console.log(weatherValue);

        const weatherDescription = weatherDataInJSON.weather[0].description;
        console.log(weatherDescription);

        const weatherIcon = weatherDataInJSON.weather[0].icon;
        console.log(weatherIcon);

        //res.send("<h1> The temperature in London is " + weatherValue + " degrees Celcius. </h1>\n The weather desciption is: " + weatherDescription);

        res.write("<h1> The temperature in London is " + weatherValue + " degrees Celcius. </h1>");
        res.write("The weather desciption is: " + weatherDescription);
        res.write("<p>The weather icon is: <img src=http://openweathermap.org/img/wn/" + weatherIcon+".png\><p>");
        res.send()
    });
});

//res.send("Server is up and running"); You could only have once 'send' per block */