const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

//RUTES
app.use("/api/task", require("./routes/task"));
app.use("/api/register", require("./routes/register"));
app.use("/api/login", require("./routes/login"));

//NUMBER PORT
const port = process.env.PORT || 5000;

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
  .then(() => console.log("Connection established"))
  .catch((err) => console.error("Connection Failed: " + err.message));
