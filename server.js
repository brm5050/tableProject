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
	phone: "732-234-5678",
	email: "origin@aol.com",
	uniqueId: "73111"
},{
  name: "Davey D",
  phone: "732-342-9876",
  email: "davey@aol.com",
  uniqueId: "72211"
}
];

var waitingList = [];

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



app.get("/api/waitlist", function(req, res) {
  res.json(waitingList);
});

//GET api/waiting list



//POST api/new
app.post("/api/tables", function(req, res) {
  
  var collection,
      reservation = req.body;

  if(reservations.length < 5) {
    collection = "reservations";
    reservations.push(reservation);

  } else {
    collection = "waiting-list";
    waitingList.push(reservation);
  }



  else
  	res.json(reservations);
});

app.post("/api/new", function(req, res) {
  var newReserve = req.body;
  newReserve.routeName = newReserve.name.replace(/\s+/g, "").toLowerCase();


});





//Starts server listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});