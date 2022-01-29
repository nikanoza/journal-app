import { Injectable } from "@angular/core";
import { Student } from "./student.model";

@Injectable({
    providedIn: 'root'
})

export class StudentService{
    students: Student[] = [
        {name: 'Nugo Bibilashvili', 
        age:22, 
        marks: [
            {date:'4/10/2020', mark:3},
        ], 
        average: 3},
        {name: 'Marexi Xidjakadze', 
        age:54, 
        marks: [
            {date:'4/10/2020', mark:5},
        ], 
        average: 5},
        {name: 'Nini Kurtanidze', 
        age:16, 
        marks: [
            {date:'4/10/2020', mark:3},
        ], 
        average: 3},
        {name: 'Salome Nozadze', 
        age:29, 
        marks: [
            {date:'4/10/2020', mark:10},
        ], 
        average: 3},
        {name: 'Beso Kvaracxelia', 
        age:16, 
        marks: [
            {date:'4/10/2020', mark:5},
        ], 
        average: 5},
        {name: 'Gela Chakhaia', 
        age:25, 
        marks: [
            {date:'4/10/2020', mark:8},
        ], 
        average: 8},
        {name: 'Severian Chivchivadze', 
        age:43, 
        marks: [
            {date:'4/10/2020', mark:2},
        ], 
        average: 2},
        {name: 'Nika Nozadze', 
        age:27, 
        marks: [
            {date:'4/10/2020', mark:7},
        ], 
        average: 7},
    ];
}

