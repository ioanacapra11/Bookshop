const express = require("express");

const Users = require("./database");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.listen(PORT, (err) => {
    if(err) console.log(err);
    console.log("app is listening on port", PORT);
})