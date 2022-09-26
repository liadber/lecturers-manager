import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {LecturersComponent} from './lecturers/lecturers.component';
import {LanguagesComponent} from './lecturers/languages/languages.component';
import {LecturersService} from "./lecturers/lecturers.service";
import {LanguagesService} from "./lecturers/languages/languages.service";

@NgModule({
  declarations: [
    AppComponent,
    LecturersComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LecturersService, LanguagesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
