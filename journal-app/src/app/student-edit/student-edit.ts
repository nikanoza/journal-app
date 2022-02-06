import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

    students: Student[] = [];
    fetchData = false;
    student!: FormGroup;

    constructor(private studentService: StudentService,
                private route: ActivatedRoute,
                private router: Router){

    }

    ngOnInit(): void {
        this.fetchStudent();
    }

    fetchStudent(){
        this.fetchData = true;
        const studentId = +this.route.snapshot.params["id"];
        this.studentService.onGetStudentsData()
        .subscribe( data => {
            this.fetchData = false;
            this.students = data;
            this.student = new FormGroup({
                'studentName': new FormControl(this.students[studentId].name, Validators.required),
                'studentAge': new FormControl(this.students[studentId].age, Validators.required)
            })
        });
    }


    goBack(){
        this.router.navigate(['marks']);
    }

    onRemoveStudent(){

    }

    onSaveChanges(){
        
    }
}