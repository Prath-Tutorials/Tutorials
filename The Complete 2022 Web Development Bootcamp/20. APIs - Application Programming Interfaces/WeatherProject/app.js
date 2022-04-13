const express = require("express");
const https = require("https"); // A native Node.ja module



const app = express();

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Markham&appid=2c5b6ba77c18bb9fc702aaac3839885d&units=metric";
    
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
            res.write("The weather icon is: <img src=http://openweathermap.org/img/wn/" + weatherIcon+".png\>");
            res.send()
        });
    });

    //res.send("Server is up and running"); You could only have once 'send' per block
});


app.listen(3000, function (){
    console.log("Server is running on port 3000");
});
