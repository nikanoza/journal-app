import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { faArrowLeft, faUserMinus, faSave } from '@fortawesome/free-solid-svg-icons';
import { Student } from '../student.model';
import { StudentService } from '../students.service';

@Component({
    selector: 'new-student',
    templateUrl: './new-student.html',
    styleUrls: ['./new-student.css']
})

export class NewStudentComponent {
    faArrowLeft = faArrowLeft;
    faUserMinus = faUserMinus;
    faSave = faSave;

    students: Student[] = [];
    student!: FormGroup;

    constructor(private studentService: StudentService,
                private router: Router){

    }

    ngOnInit(): void {
        this.student = new FormGroup({
            'studentName': new FormControl(null, Validators.required),
            'studentAge': new FormControl(null, Validators.required)
        })
    }

    goBack(){
        this.router.navigate(['marks']);
    }

    onSaveChanges(){
        
    }
}