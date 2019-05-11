// GLOBAL VARIABLES
//======================================================
  
  const express = require('express');
  const app = express();
  const port = process.env.PORT ||  3000;
  const path = require("path");
  const axios = require('axios');

//======================================================


// ROUTING
//======================================================
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/newsletter", function(req, res) {
      res.sendFile(path.join(__dirname, "newsletter.html"));
    });

  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());



  // Starts the server to begin listening
  app.listen(port, function() {
    console.log("App listening on http://localhost:" + port);
  });
//======================================================

let currentRes = [
    {
        userName: 'Brent Abruzese',
        phone: '848-213-2522',
        email: 'brent.abruzese@gmail.com',
        id: 438534
    }
]

let waitingList = [
    {
        userName: 'Som Ramnani',
        phone: '800-555-1212',
        email: 'som@som.com',
        id: 483984
    }
]

let resCount = 0;

app.get("/reservations/:reservation", function(req, res) {
  let reservation = req.params.reservation;

  console.log(reservation);

  for (var i = 0; i < currentRes.length; i++) {
    if (reservation === currentRes[i].routeName) {
      return res.json(reservation[i]);
    }
  }
  return res.json(false);
});

  // app.post("/reservations", function(req, res) {

  // })

app.post("/reservation", function(req, res) {
  let reservation = req.body;
  console.log(reservation);
  currentRes.push(reservation);
})
