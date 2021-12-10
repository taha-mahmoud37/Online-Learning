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
