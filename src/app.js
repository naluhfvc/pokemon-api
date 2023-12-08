const express = require("express");
const app = express();
const morgan = require("morgan");
const routes = require("./routes");

app.use(morgan("dev"));
app.use(express.json());

app.use("/pokemon/", routes);

module.exports = app;
