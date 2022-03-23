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
            'studentAge': new FormControl(null, [Validators.required])
        });
        this.studentService.onGetStudentsData().subscribe(
            (data) => this.students = data ,
            (error) => {

            }
        );
    }

    goBack(){
        this.router.navigate(['marks']);
    }

    onSaveChanges(){
        if(this.student.valid){
            let marks = this.students[0].marks.map(mark => { return {...mark, mark: 0}});
            this.students.push({
                name: this.student.get('studentName')?.value,
                age: this.student.get('studentAge')?.value,
                id: Math.round(Math.random() * 100000000),
                average: 0, 
                marks
            });
            
            this.studentService.onPostStudentsData(this.students).subscribe(
                request => {
                    this.goBack();
                },
                error => {
                    
                } 
            );
        }
    }
}