import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Lecturers Manager App';
  language = "all"

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.onFetchLecturers();
  }

  onFetchLecturers() {
    this.fetchLecturers();
  }

  private fetchLecturers() {
    this.http.get(`http://localhost:8080/lecturers/api/getLecturers`)
      .subscribe(responseData => {
          console.log(responseData);
        })
  }
}
