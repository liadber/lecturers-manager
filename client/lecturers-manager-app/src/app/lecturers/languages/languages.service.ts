import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class LanguagesService {
  private languages: string[] = [];
  languagesChanged = new Subject<string[]>();

  constructor() {
  }

  setLanguages(languages: string[]) {
    this.languages = languages;
    this.languagesChanged.next(this.languages.slice());
  }

  getLanguages() {
    return this.languages.slice();
  }
}
