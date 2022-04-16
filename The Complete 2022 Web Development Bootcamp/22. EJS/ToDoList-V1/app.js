const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();

let newItems = ["Buy Food", "Cook Food", "Eat More"];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function (req, res) {

    let day = date.getDate(); // this is calling the function in date.js [date.getDate() or date.getDay()]
    res.render("list", { 
        listTitle: day,
        newListItems: newItems
    });
});

app.post("/", function(req, res){


    let newItem = req.body.newItem
    console.log(req.body.list)
    if(req.body.list === "Work"){
        workItems.push(newItem); 
        res.redirect("/work");
    } else {
        newItems.push(newItem); 
        res.redirect("/");
    }

});

app.get("/work", function(reg, res){
        res.render("list",{
            listTitle: "Work List",
            newListItems: workItems
        })
})


app.get("/about", function(reg, res){
    res.render("about")
})





app.listen(3000, function () {
    console.log("Server started on port 3000");
})