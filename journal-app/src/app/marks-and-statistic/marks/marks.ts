import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faTrashAlt, faEdit, faSortUp, faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import { Student } from 'src/app/student.model';
import { StudentService } from 'src/app/students.service';

@Component({
    selector: 'app-marks',
    templateUrl: './marks.html',
    styleUrls: ['./marks.css']
})

export class MarksComponent implements OnInit{
    faPlus = faPlusCircle;
    faTrash = faTrashAlt;
    faEdit = faEdit;
    faSortUp = faSortUp;
    faCloudUploadAlt = faCloudUploadAlt;

    students: Student[] = [];

    constructor( private studentService: StudentService){}
    

    ngOnInit(): void {
        this.students = this.studentService.students;
    }

    onAddDay(){
        const days = this.students[0].marks;
        let lastDay = null;
        if(days.length > 0){
            lastDay = days[days.length -1].date;
        }else{
            lastDay = '4/10/2020';
        }
        
        const date = new Date(lastDay);

        if(days.length > 0){
            if(days.length % 4 === 1){
                date.setDate(date.getDate()+1);
            }else{
                date.setDate(date.getDate()+2);
            }
        }

        for(let i = 0; i < this.students.length; i++){
            this.students[i].marks.push({
                date: date.toLocaleDateString(),
                mark: 0
            })
        }
        
    }

    onRemoveDay(){
        for(let i = 0; i < this.students.length; i++){
            this.students[i].marks.pop();
        }
    }
}