import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LanguagesService} from "./languages.service";
import {DataStorageService} from "../../shared/data-storage.service";

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit, OnDestroy {

  languagesList: string[] = [];
  selectedLanguage: string;
  subscription: Subscription;

  constructor(private languagesService: LanguagesService, private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
    this.subscription = this.languagesService.languagesChanged
      .subscribe((languagesNames: string[]) => {
          this.languagesList = languagesNames;
          this.selectedLanguage = '';
        }
      );
    this.languagesList = this.languagesService.getLanguages();
    this.selectedLanguage = '';
  }

  onSelectedLanguageChanged(lanName: string) {
    if (lanName !== '') {
      this.selectedLanguage = lanName;
      this.dataStorageService.getLanguagesByLecturer(this.selectedLanguage);
    } else {
      this.dataStorageService.fetchLecturers();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
