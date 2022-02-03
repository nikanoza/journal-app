import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MarksAndStatisticComponent } from './marks-and-statistic/marks-and-statistic';
import { MarksComponent } from './marks-and-statistic/marks/marks';
import { StatisticComponent } from './marks-and-statistic/statistic/statistic';
import { MenuComponent } from './menu/menu.component';
import { EditStudentComponent } from './student-edit/student-edit';

const appRoutes = [
  {path: '', pathMatch: 'prefix', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'marks', component: MarksAndStatisticComponent},
  {path: 'books', component: HomeComponent},
  {path: 'help', component: HomeComponent},
  {path: 'edit/:id', component: EditStudentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MarksAndStatisticComponent,
    StatisticComponent,
    MarksComponent,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
