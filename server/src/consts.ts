import {Lecturer} from "./models/Lecturer";
import {Language} from "./models/Language";

export const lecturers: Lecturer[] = [
    {
        id: "1", name: "Moshe", email: "moshe@moshe.com", languages: [1, 3]
    }, {
        id: "20", name: "Avi", email: "avi@moshe.com", languages: [3]
    }, {
        id: "300", name: "Gila", email: "gila@moshe.com", languages: [2, 4, 7]
    }
];

export const languages: Language[] = [
    {
        id: 1, name: "Java"
    }, {
        id: 2, name: ".NET"
    }, {
        id: 3, name: "NodeJS"
    }, {
        id: 4, name: "Advanced Vanilla JS"
    }, {
        id: 5, name: "React"
    }, {
        id: 5, name: "Angular"
    }, {
        "id": 7, "name": "Kotlin"
    }, {
        id: 7, name: "Dart"
    }, {
        id: 8, name: "Flutter"
    }
];
