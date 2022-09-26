import {Request, Response} from "express";
import {languages, lecturers} from "../consts";
import {Language} from "../models/Language";
import {Lecturer} from "../models/Lecturer";

export abstract class LecturersController {

    static getLecturers(req: Request, res: Response) {
        const lecturersInformation = lecturers.map((lecturer: Lecturer) => {
            const languagesNames = lecturer.languages.map((languageNum: number) => {
                const language = languages.find(language =>
                    language.id===languageNum);
                return language?.name;
            })
            return {...lecturer, languages: languagesNames}
        });
        res.status(200).json({lecturers: lecturersInformation});
    }

    static getLanguagesNames(req: Request, res: Response) {
        res.status(200).json({languagesNames: languages.map((language: Language) => language.name)});
    }

    /**IMPLEMENTING THE LECTURERS FILTERING FUNCTIONALITY HERE:**/

    static getLecturersByLanguageName(req: Request, res: Response) {
        const languageName: string = req.params.lanName;
        const languagesPerId: Language[] = languages.filter((language: Language) => language.name === languageName);
        const languageId: number = languagesPerId[0].id; //guess that there is one id per language name, so take the first one.
        let lecturersByLanguageId: Lecturer[] = lecturers.filter((lecturer: Lecturer) => lecturer.languages.includes(languageId));
        res.status(200).json({lecturersByLanguageId: lecturersByLanguageId});
    }
}
