const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/reservations", function(req, res) {

})