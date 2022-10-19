const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, (err) => {
    if(err) console.log(err);
    console.log("app is listening on port", PORT);
})