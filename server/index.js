const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send(`Lecturers' server is up and running.`);
});

app.get("/api/getLecturers", getLecturers);

function getLecturers(req, res) {
    res.send(200, lecturers);
}

// start the Express server
app.listen(port, () => {

});
