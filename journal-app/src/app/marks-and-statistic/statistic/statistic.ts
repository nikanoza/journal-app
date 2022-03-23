import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/student.model';
import { StudentService } from 'src/app/students.service';

@Component({
    selector: 'app-statistic',
    templateUrl: './statistic.html',
    styleUrls: ['./statistic.css']
})

export class StatisticComponent implements OnInit{

    students: Student[] = [];

    totalDays: number = 0;
    totalMissed: number = 0;
    totalStudents: number = 0;
    averageMarks: number = 0;

    constructor(private studentService: StudentService){

    }

    ngOnInit(){
        this.studentService.onGetStudentsData()
        .subscribe( data => {
            this.students = data;
            this.totalDays = this.students[0].marks.length;
            this.totalMissed = this.countMissed();
            this.totalStudents = this.students.length;
            this.averageMarks = this.calculateTotalAverage();
        });
    }

    countMissed(){
        let countMissed = 0;
        for(let i = 0; i < this.students.length; i++){
            countMissed += this.students[i].marks.reduce( (p,c) => p + (c.mark === 0 ? 1 : 0), 0);
        }
        return countMissed;
    }

    calculateTotalAverage(){
        return this.students.reduce( (p,c) => p + c.average, 0)/this.students.length;
    }
}