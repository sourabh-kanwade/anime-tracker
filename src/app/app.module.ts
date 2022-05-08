import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faBook,
  faCompass,
  faHouse,
  faUserGear,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faHouse, faBook, faCompass, faUserGear, faArrowLeft);
  }
}
