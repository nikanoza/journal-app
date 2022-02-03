import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft, faUserMinus, faSave } from '@fortawesome/free-solid-svg-icons';
import { Student } from '../student.model';
import { StudentService } from '../students.service';

@Component({
    selector: 'student-edit',
    templateUrl: './student-edit.html',
    styleUrls: ['./student-edit.css']
})

export class EditStudentComponent implements OnInit{
    faArrowLeft = faArrowLeft;
    faUserMinus = faUserMinus;
    faSave = faSave;
    student: Student = {
        name: '',
        age: 0,
        marks: [],
        average: 0
    };

    constructor(private studentService: StudentService,
                private route: ActivatedRoute){

    }

    ngOnInit(): void {
        const studentId = +this.route.snapshot.params["id"];
        this.student.name = this.studentService.students[studentId].name;
        this.student.age = this.studentService.students[studentId].age;
    }
}