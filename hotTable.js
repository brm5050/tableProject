// Node.js core dependencies -----------------------------

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Setting up for express --------------------------------

var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Reservations ------------------------------------------

var reservations = [{
	routeName: "DaveDisney",
	name: "Dave Disney",
	phone: 2026674439,
	email: "in_dc_bro@gmail.com"
}, {
	routeName: "joeSchmo",
	name: "Joe Schmo",
	phone: 4676095208,
	email: "joeyblobs@gmail.com"
}];

// Routes ------------------------------------------------

// Initial route to the landing page
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/reserve.html", function(req, res) {
	res.sendFile(path.join(__dirname, "reserve.html"));
})

app.get("/tables.html", function(req, res) {
	res.sendFile(path.join(__dirname, "tables.html"));
})



app.post("/api/new", function(req, res) {
	var newReservation = req.body;
	newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

	console.log(newReservation);

	// pushes the new reservation object in the reservations array
	reservations.push(newReservation);

	reservations
})
