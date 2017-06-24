//npms

var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");

var app = express ();

var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes and logs server is listening

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// GET reserve - reserve.html

// GET tables reservations.html

//GET api Tables

//GET api/waiting list

//POST api/new

//GET /api/clear

//2 arrays waiting list reservations

//Starts server listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});