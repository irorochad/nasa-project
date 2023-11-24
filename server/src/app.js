const express = require("express");

// import other components
const planetRouter = require("./routes/planets/planets.router");

const app = express();

app.use(express.json());
app.use(planetRouter);



module.exports = app;
