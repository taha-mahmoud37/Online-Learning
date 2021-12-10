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
    count1 = 0;
    studentCount:any = setInterval(() => {
        this.count1++;

        if (this.count1 == 1500) {
            clearInterval(this.studentCount);
        }
    }, 2);

    /* count 1 for student*/ 


    /* count 2 for courese*/ 
    count2 = 0;
    studentCount2:any = setInterval(() => {
        this.count2++;

        if (this.count2 == 700) {
            clearInterval(this.studentCount2);
        }
    }, 5);

    /* count 2 for courese*/

    /* count 3 for rating*/ 
    count3 = 0;
    studentCount3:any = setInterval(() => {
        this.count3++;
 
        if (this.count3 == 500) {
            clearInterval(this.studentCount3);
        }
    }, 7);
 
    /* count 3 for rating*/ 

    /* count 4 for project*/ 
    count4 = 0;
    studentCount4:any = setInterval(() => {
        this.count4++;

        if (this.count4 == 300) {
            clearInterval(this.studentCount4);
        }
    }, 9);

    /* count 4 for project*/ 





}
