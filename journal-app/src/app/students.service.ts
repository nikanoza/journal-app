import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';

import { Student } from "./student.model";

@Injectable({
    providedIn: 'root'
})

export class StudentService{
    constructor(private http: HttpClient){}

    onPostStudentsData(data: Student){
        this.http.post('https://journal-app-1c400-default-rtdb.firebaseio.com/students.json', data)
        .subscribe(
            response => console.log(response)
        );
    }

    onGetStudentsData(){
       return this.http.get<{[key: string]: Student}>('https://journal-app-1c400-default-rtdb.firebaseio.com/students.json')
        .pipe(map( requestData => {
            const values = Object.values(requestData);
            const keys = Object.keys(requestData);
            const studentsArr: Student[] = [];
            for(let i = 0; i < values.length; i++){
                studentsArr.push({...values[i], id: keys[i]});
            }

            return studentsArr;
        }));
    }

}

