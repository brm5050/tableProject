//npms

var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");

var app = express ();

var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//create two variables for tables and reservations

var reservations = [{
	name: "Origin Master",
	phoneNumer: "732-234-5678",
	email: "origin@aol.com",
	uniqueId: "73111"
}];

var waitingList = [{
	name: "Davey D",
	phoneNumer: "732-342-9876",
	email: "davey@aol.com",
	uniqueId: "72211"
}];

// Routes and logs server is listening

app.get("/index", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// GET reserve - reserve.html

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// GET tables reservations.html

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

//GET api Tables

app.get("/api/tables", function(req, res) {
  res.json(reservations);
});



app.get("/api/waiting-list", function(req, res) {
  res.json(waitingList);
});

//GET api/waiting list

app.post("/api/new", function(req, res) {
  var newTable = req.body;
  newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newTable);

  tables.push(newTable);

  res.json(newTable);

  if (reservations.length){

  }
});



//2 arrays waiting list reservations

//Starts server listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});