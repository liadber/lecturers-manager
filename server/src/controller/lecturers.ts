import {Request, Response} from "express";
import {languages, lecturers} from "../consts";
import {Language} from "../models/Language";
import {Lecturer, LecturerWithLanguagesNames} from "../models/Lecturer";

export abstract class LecturersController {

    static getLecturers(req: Request, res: Response) {
        const lecturersInformation = LecturersController.lecturersToClientFormat(lecturers);
        res.status(200).json({lecturers: lecturersInformation});
    }

    static getLanguagesNames(req: Request, res: Response) {
        res.status(200).json({languagesNames: languages.map((language: Language) => language.name)});
    }

    /**IMPLEMENTING THE LECTURERS FILTERING FUNCTIONALITY HERE:**/

    static getLecturersByLanguageName(req: Request, res: Response) {
        const languageName: string = req.params.lanName;
        const languageObjectByName: Language | null = languages.find((language: Language) => language.name === languageName) || null;
        const languageId: number | null = languageObjectByName?.id || null;
        if (languageId != null) {
            let lecturersByLanguageId: Lecturer[] = lecturers.filter((lecturer: Lecturer) => lecturer.languages.includes(languageId));
            res.status(200).json({lecturersByLanguageId: LecturersController.lecturersToClientFormat(lecturersByLanguageId)});
        } else {
            res.status(200).json(null);
        }
    }

    private static lecturersToClientFormat(lecturers: Lecturer[]): LecturerWithLanguagesNames[] {
        return lecturers.map((lecturer: Lecturer) => {
            let languagesNames: string[] = [];
            lecturer.languages.forEach((languageNum: number) => {
                const languagesObjectsById: Language[] = languages
                    .filter((language: Language) =>
                        language.id === languageNum);
                let languageNamesById: string[] = languagesObjectsById.map((language: Language) => language.name);
                languagesNames = [...languagesNames, ...languageNamesById];
            });
            return {...lecturer, languages: languagesNames}
        });
    }
}
