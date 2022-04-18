const mongoose = require('mongoose');

// This will connect or create a fruitsDB
mongoose.connect("mongodb://localhost:27017/fruitsDB");


const fruitSchema = new mongoose.Schema(
    {
        name: String,
        rating: Number,
        review: String
    }
);

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Really good"
});

//fruit.save();

const personSchema = new mongoose.Schema(
    {
        name: String,
        age: Number
    }
);

const Person = mongoose.model("Person", fruitSchema);

const person = new Person({
    name: "John",
    age: 37,
});

person.save();