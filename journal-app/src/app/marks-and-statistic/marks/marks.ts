import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faPlusCircle, faTrashAlt, faEdit, faSortUp, faCloudUploadAlt, faSearch} from '@fortawesome/free-solid-svg-icons';
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
    faSearch = faSearch;

    students: Student[] = [];
    fetchStudentsData = false;
    search!: FormGroup;

    constructor( private studentService: StudentService,
                 private router: Router){}
    

    ngOnInit(){
       this.fetchStudents();
       this.search = new FormGroup({
           'search': new FormControl('')
       });
    }

    fetchStudents(){
        this.fetchStudentsData = true;
        this.studentService.onGetStudentsData()
        .subscribe( data => {
            this.fetchStudentsData = false;
            this.students = data
        });
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
            });
            this.students[i].average = this.calculateStudentAverage(i);
        }
    }

    onRemoveDay(){
        for(let i = 0; i < this.students.length; i++){
            this.students[i].marks.pop();
            this.students[i].average = this.calculateStudentAverage(i);
        }
    }

    calculateStudentAverage(studentIndex: number){
        let average = this.students[studentIndex].marks.reduce(
            (p,c) => p + c.mark, 0) / this.students[studentIndex].marks.length;

        return average ? average : 0;
    }
    
    increase(studentIndex:number, dayIndex:number){

        if(this.students[studentIndex].marks[dayIndex].mark < 10){
            this.students[studentIndex].marks[dayIndex].mark++;
            this.students[studentIndex].average = this.calculateStudentAverage(studentIndex);
        };    
    }

    decrease(studentIndex:number, dayIndex:number){

        if(this.students[studentIndex].marks[dayIndex].mark > 0){
            this.students[studentIndex].marks[dayIndex].mark--;
            this.students[studentIndex].average = this.calculateStudentAverage(studentIndex);
        };    
    }

    onEdit(id: number){
        this.router.navigate(['edit', id]);
    }

    onAddStudent(){
        this.router.navigate(['new']);
    }

    onUpdateStudentsData(){
        this.studentService.onPostStudentsData(this.students)
       .subscribe(
           data => console.log(data)
       );
    }

}