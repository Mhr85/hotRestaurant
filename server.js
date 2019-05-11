const express = require('express')
// const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hot Restaurant'))

app.get("/reservationForm", function(req, res) {
    res.sendFile(path.join(__dirname, "reservationForm.html"));
  });

app.listen(port, () => console.log(`Hot Restaurant app is listening on port ${port}!`))


