// Node.js core dependencies -----------------------------

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Setting up for express --------------------------------

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Reservations & Waiting list ---------------------------

// starting with 2 reservations
var reservations = [{
	ID: "DaveDisney",
	name: "Dave Disney",
	phone: 2026674439,
	email: "in_dc_bro@gmail.com"
}, {
	ID: "joeSchmo",
	name: "Joe Schmo",
	phone: 4676095208,
	email: "joeyblobs@gmail.com"
}];

// empty waitlist array for when the reservations are more than 5
var waitList = [];


// Routes ------------------------------------------------

// Initial route to the landing page
app.get("/index", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
})

// Push to the reservation creation page
app.get("/reserve", function(req, res) {
	res.sendFile(path.join(__dirname, "reserve.html"));
})

// push to the reservations list
app.get("/tables", function(req, res) {
	res.sendFile(path.join(__dirname, "tables.html"));
})



// Creating a brand new reservation
app.post("/api/tables", function(req, res) {
	
	if(reservations[i] < 5) {

		var newReservation = req.body;

		newReservation.ID = newReservation.name.replace(/\s+/g, "").toLowerCase();
		console.log(newReservation);
		// pushes the new reservation object in the reservations array
		reservations.push(newReservation);
		res.json(newReservation);

	} else {
		var newWaitlist = req.body;
		newWaitlist.ID = newWaitlist.name.replace(/\s+/g, "").toLowerCase();
		console.log(newWaitlist);
		waitList.push(newWaitlist);
		res.json(newWaitlist);
	}
	
});


app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
