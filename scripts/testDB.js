const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// Connect to Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/nytreact",
);

const articleSeed = [
    {
        title: "test",
        url: "test"
    },
    {
        title: "test2",
        url: "test2"
    },
    {
        title: "test3",
        url: "test3"
    }
];

db.Article
    .remove({})
    .then(() => db.Article.collection.insertMany(articleSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });