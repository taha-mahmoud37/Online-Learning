/* eslint-disable linebreak-style */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-our-teacher',
    templateUrl: './our-teacher.component.html',
    styleUrls: ['./our-teacher.component.scss']
})
export class OurTeacherComponent implements OnInit {
    

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(private _Router:Router) { }
    // eslint-disable-next-line linebreak-style

    
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ngOnInit(): void {
    }

    goHome() {
        this._Router.navigate(['/home']);
    }

}
