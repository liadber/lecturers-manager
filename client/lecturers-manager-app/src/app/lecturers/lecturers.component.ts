import {Component, OnDestroy, OnInit} from '@angular/core';
import {Lecturer} from "./lecturer.model";
import {LecturersService} from "./lecturers.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.scss']
})
export class LecturersComponent implements OnInit, OnDestroy {

  lecturersList: Lecturer[];
  selectedLecturer: Lecturer;
  subscription: Subscription;

  constructor(private lecturersService: LecturersService) {
  }

  ngOnInit(): void {
    this.subscription = this.lecturersService.lecturersChanged
      .subscribe((lecturers: Lecturer[]) => {
          this.lecturersList = lecturers;
          this.selectedLecturer = this.lecturersList[0];
        }
      );
    this.lecturersList = this.lecturersService.getLecturers();
    this.selectedLecturer = this.lecturersList[0];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
