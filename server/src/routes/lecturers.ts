import {LecturersController} from '../controller/lecturers';
import express from "express";

export const lecturersRouter = express.Router();

lecturersRouter.get("/api/getLecturers/", LecturersController.getLecturers);
lecturersRouter.get("/api/getLanguagesNames/", LecturersController.getLanguagesNames);
lecturersRouter.get("/api/getLecturersByLanguageName/:lanName", LecturersController.getLecturersByLanguageName);
