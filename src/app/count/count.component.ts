/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-count',
    templateUrl: './count.component.html',
    styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ngOnInit(): void {
 
    }
    
    /* count 1 for student*/ 
    studentCount = 0;
    studentsCount:any = setInterval(() => {
        this.studentCount++;

        if (this.studentCount == 1500) {
            clearInterval(this.studentsCount);
        }
    }, 2);

    /* count 1 for student*/ 


    /* count 2 for courese*/ 
    courseCount = 0;
    coursesCount:any = setInterval(() => {
        this.courseCount++;

        if (this.courseCount == 700) {
            clearInterval(this.coursesCount);
        }
    }, 5);

    /* count 2 for courese*/

    /* count 3 for rating*/ 
    ratingCount = 0;
    ratingsCount:any = setInterval(() => {
        this.ratingCount++;
 
        if (this.ratingCount == 500) {
            clearInterval(this.ratingsCount);
        }
    }, 7);
 
    /* count 3 for rating*/ 

    /* count 4 for project*/ 
    projectCount = 0;
    projectsCount:any = setInterval(() => {
        this.projectCount++;

        if (this.projectCount == 300) {
            clearInterval(this.projectsCount);
        }
    }, 9);

    /* count 4 for project*/ 





}
