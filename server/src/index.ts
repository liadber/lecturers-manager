import {lecturers} from "./consts";
import {Language} from "./models/Language";
import {Lecturer} from "./models/Lecturer";

const express = require("express");
const {languages} = require("./consts");
const app = express();
const port: number = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send(`Lecturers' server is up and running.`);
});

app.get("/api/getLecturers", getLecturers);
app.get("/api/getLanguagesNames", getLanguagesNames);
app.get("/api/getLecturersByLanguageName:name", getLecturersByLanguageName);

function getLecturers(req, res) {
    res.send(200, lecturers);
}

function getLanguagesNames(req, res) {
    res.send(200, languages.map(language => language.name));
}

function getLecturersByLanguageName(req, res) {
    const languageName: string = req.params.name;
    const languageId: number = (languages.filter((language: Language) => language.name === languageName)) ?? [0]; //Guess that there is only one languageName per id.
    let lecturersByLanguageId: Lecturer[] = lecturers.filter((lecturer: Lecturer) => lecturer.languages.includes(languageId));
    res.send(200, lecturersByLanguageId);
}

// start the Express server
app.listen(port, () => {

});
