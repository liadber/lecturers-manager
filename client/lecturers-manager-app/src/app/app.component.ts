import {Component, OnInit} from '@angular/core';
import {DataStorageService} from "./shared/data-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Lecturers Manager App';

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.dataStorageService.fetchLecturers();
    this.dataStorageService.fetchLanguagesNames();
  }
}
