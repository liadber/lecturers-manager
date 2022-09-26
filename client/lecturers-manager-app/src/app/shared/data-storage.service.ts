import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Lecturer} from "../lecturers/lecturer.model";
import {LecturersService} from "../lecturers/lecturers.service";
import {LanguagesService} from "../lecturers/languages/languages.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private lecturersService: LecturersService,
              private languagesService: LanguagesService) {

  }

  fetchLecturers() {
    this.http.get<{ lecturers: Lecturer[] }>(`http://localhost:8080/lecturers/api/getLecturers`)
      .subscribe((responseData) => {
        this.lecturersService.setLecturers(responseData.lecturers)
      });
  }

  fetchLanguagesNames() {
    this.http.get<{ languagesNames: string[] }>(`http://localhost:8080/lecturers/api/getLanguagesNames`)
      .subscribe((responseData) => {
        this.languagesService.setLanguages(responseData.languagesNames)
        console.log(responseData.languagesNames);
      });
  }

  getLanguagesByLecturer(lanName: string) {
    this.http.get<{ lecturersByLanguageId: Lecturer[] }>(`http://localhost:8080/lecturers/api/getLecturersByLanguageName/` + lanName)
      .subscribe((responseData) => {
        this.lecturersService.setLecturers(responseData.lecturersByLanguageId)
      });
  }
}
