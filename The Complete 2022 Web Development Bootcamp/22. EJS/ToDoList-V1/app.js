const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var newItems = ["Buy Food", "Cook Food", "Eat More"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { 
        kindOfDay: day,
        newListItems: newItems
    });
});

app.post("/", function(req, res){
    var newItem = req.body.newItem
    newItems.push(newItem); 
    console.log(newItem);
    res.redirect("/");
});



app.listen(3000, function () {
    console.log("Server started on port 3000");
})