const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello world");
});

//NUMBER PORT
const port = process.env.PORT;

app.listen(port, () => {
  console.log("The server is running on " + port);
});

//CONNECTION MONGO DB
const connection_sting = process.env.DATABASE;

mongoose
  .connect(connection_sting, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("conectado de base de datos"))
  .catch((err) => console.error("Connection Failed: " + err.message));
