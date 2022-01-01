/* eslint-disable linebreak-style */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(private _Router:Router) { }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ngOnInit(): void {
    }

    goHome() {
        this._Router.navigate(['/home']);
    }

    /* count 1 for student*/ 
    studentCount = 0;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

        if (this.courseCount == 1000) {
            clearInterval(this.coursesCount);
        }
    }, 7);

    /* count 2 for courese*/

    /* count 3 for rating*/ 
    ratingCount = 0;
    ratingsCount:any = setInterval(() => {
        this.ratingCount++;

        if (this.ratingCount == 800) {
            clearInterval(this.ratingsCount);
        }
    }, 10);

    /* count 3 for rating*/ 

    /* count 4 for project*/ 
    projectCount = 0;
    projectsCount:any = setInterval(() => {
        this.projectCount++;

        if (this.projectCount == 500) {
            clearInterval(this.projectsCount);
        }
    }, 9);

    /* count 4 for project*/

    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            740: {
                items: 3
            },
            940: {
                items: 4
            }
        },
        nav: true
    };

    customOption: OwlOptions = {
        loop: true,
        autoplay: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            740: {
                items: 4,
            },
            940: {
                items: 4,
            },
            1200: {
                items: 4,
            },
            1400: {
                items: 4,
            }
        },
    
    };

    

}
