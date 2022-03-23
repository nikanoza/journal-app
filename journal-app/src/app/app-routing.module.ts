import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MarksAndStatisticComponent } from "./marks-and-statistic/marks-and-statistic";
import { NewStudentComponent } from "./new-student/new-student";
import { CanDeactivateGuard } from "./can-deactivate-guard.service";
import { EditStudentComponent } from "./student-edit/student-edit";
import { ErrorPageComponent } from "./error-page/error-page.component";

const appRoutes: Routes = [
    {path: '', pathMatch: 'prefix', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'marks', component: MarksAndStatisticComponent},
    {path: 'books', component: HomeComponent},
    {path: 'help', component: HomeComponent},
    {path: 'edit/:id', component: EditStudentComponent, canDeactivate: [CanDeactivateGuard] },
    {path: 'new', component: NewStudentComponent},
    {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
    {path: '**', redirectTo: '/not-found'}
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