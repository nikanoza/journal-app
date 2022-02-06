import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MarksAndStatisticComponent } from "./marks-and-statistic/marks-and-statistic";
import { NewStudentComponent } from "./new-student/new-student";
import { EditStudentComponent } from "./student-edit/student-edit";

const appRoutes: Routes = [
    {path: '', pathMatch: 'prefix', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'marks', component: MarksAndStatisticComponent},
    {path: 'books', component: HomeComponent},
    {path: 'help', component: HomeComponent},
    {path: 'edit/:id', component: EditStudentComponent },
    {path: 'new', component: NewStudentComponent}
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}