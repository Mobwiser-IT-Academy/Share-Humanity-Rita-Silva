import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { TitleContainerComponent } from './Home/title-container/title-container.component';
import { FilterNavbarComponent } from './Home/filter-navbar/filter-navbar.component';
import { IssuesContainerComponent } from './Home/issues-container/issues-container.component';
import { CoronavirusComponent } from './coronavirus/coronavirus.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleContainerComponent,
    FilterNavbarComponent,
    IssuesContainerComponent,
    CoronavirusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
