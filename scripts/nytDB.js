const mongoose = require("mongoose");
const db = require("../models");
const axios = require("axios");
const express = require("express");

const app = express();

mongoose.Promise = global.Promise;

// Connect to Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/nytreact",
);

axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b6fcafce1265400bbc316a7b6e278daf")
    .then(response => {
        console.log(response.data);
    })