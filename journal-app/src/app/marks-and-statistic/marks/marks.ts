import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';
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
    students: Student[] = [];

    constructor( private studentService: StudentService){}
    

    ngOnInit(): void {
        this.students = this.studentService.students;
    }
}