import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft, faUserMinus, faSave } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Student } from '../student.model';
import { StudentService } from '../students.service';
import { CanComponentDeactivate } from '../can-deactivate-guard.service';

@Component({
    selector: 'student-edit',
    templateUrl: './student-edit.html',
    styleUrls: ['./student-edit.css']
})

export class EditStudentComponent implements OnInit, CanComponentDeactivate{
    faArrowLeft = faArrowLeft;
    faUserMinus = faUserMinus;
    faSave = faSave;

    students: Student[] = [];
    studentId!: number;
    fetchData = false;
    student!: FormGroup;
    changesSaved = false;

    constructor(private studentService: StudentService,
                private route: ActivatedRoute,
                private router: Router){

    }

    ngOnInit(): void {
        this.fetchStudent();
    }

    fetchStudent(){
        this.fetchData = true;
        this.studentId = +this.route.snapshot.params["id"];
        this.studentService.onGetStudentsData()
        .subscribe( data => {
            this.fetchData = false;
            this.students = data;
            this.student = new FormGroup({
                'studentName': new FormControl(this.students[this.studentId].name, Validators.required),
                'studentAge': new FormControl(this.students[this.studentId].age, Validators.required)
            })
        });
    }


    goBack(){
        this.router.navigate(['marks']);
    }

    onRemoveStudent(){
        this.students.splice(this.studentId,1);
        this.studentService.onPostStudentsData(this.students)
        .subscribe(
            data => console.log(data)
        );
        this.goBack();
    }

    onSaveChanges(){
        const prevStudent = this.students[this.studentId];
        this.students[this.studentId] = {
            ...prevStudent,
            name: this.student.get('studentName')?.value,
            age: this.student.get('studentAge')?.value
        }
        this.studentService.onPostStudentsData(this.students)
        .subscribe(
            data => {
                console.log(data);
                this.changesSaved = true;
                this.goBack();
            }
        );
    }

    canDeactivate(): boolean | Observable<boolean> | Promise<boolean>{
        const checkName = this.student.get('studentName')?.value !== this.students[this.studentId].name;
        const checkAge = this.student.get('studentAge')?.value !== this.students[this.studentId].age;
        if((checkName || checkAge) && !this.changesSaved){
            return confirm('Do you want to discard the changes?');
        } else {
            return true;
        }
    }
}