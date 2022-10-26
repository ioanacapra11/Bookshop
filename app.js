const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", authRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("app is listening on port", PORT);
});
