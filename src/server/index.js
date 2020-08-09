const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Aylien = require("aylien_textapi");
const app = express();
const port = 9000;

const textapi = new Aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("dist"));

app.get("/", function (request, response) {
    response.sendFile("index.html")
});

app.post("/sentiment", (request, response) => {
    const term = request.body.text;
    textapi.sentiment({
        'text': `${term}`
    }, (error, result) => {
        response.send(result);
    });
});

app.post("/summarize", (request, response) => {
    const url = request.body.url;
    textapi.summarize({
        'url': `${url}`,
        'sentences_number': '4'
    }, (error, result) => {
        response.send(result);
    })
});

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Aylien natural language processing app listening on port ${port}!`);
});