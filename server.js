const express = require('express');
const app = express();
const port = process.env.PORT ||  3000;
var path = require("path");




app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on http://localhost:" + port);
});
