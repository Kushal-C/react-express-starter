const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 9000;

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Listening on Port " + PORT);
});
