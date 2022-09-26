import {Injectable} from '@angular/core';
import {Lecturer} from './lecturer.model';
import {Subject} from "rxjs";

@Injectable()
export class LecturersService {
  private lecturers: Lecturer[] = [];
  lecturersChanged = new Subject<Lecturer[]>();


  constructor() {
  }

  setLecturers(lecturers: Lecturer[]) {
    this.lecturers = lecturers;
    this.lecturersChanged.next(this.lecturers.slice());
  }

  getLecturers() {
    return this.lecturers.slice();
  }
}
