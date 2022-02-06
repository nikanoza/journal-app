import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MarksAndStatisticComponent } from './marks-and-statistic/marks-and-statistic';
import { MarksComponent } from './marks-and-statistic/marks/marks';
import { StatisticComponent } from './marks-and-statistic/statistic/statistic';
import { MenuComponent } from './menu/menu.component';
import { NewStudentComponent } from './new-student/new-student';
import { EditStudentComponent } from './student-edit/student-edit';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MarksAndStatisticComponent,
    StatisticComponent,
    MarksComponent,
    EditStudentComponent,
    NewStudentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
