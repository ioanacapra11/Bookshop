const express = require("express");
const firebase = require("firebase-admin");
const Users = require("./database");

const bodyParser = require("body-parser");

const auth = require("./routes/auth.js");

const app = express();

app.use(bodyParser.json());
app.use("/", auth); 

const PORT = 3000;

app.listen(PORT, (err) => {
    if(err) console.log(err);
    console.log("app is listening on port", PORT);
})