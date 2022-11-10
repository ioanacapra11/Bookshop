const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.js");
const booksRoutes = require("./routes/books.js");
const cors = require("cors");

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", authRoutes);
app.use("/", booksRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("app is listening on port", PORT);
});
