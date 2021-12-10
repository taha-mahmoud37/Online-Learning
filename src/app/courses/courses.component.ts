/* eslint-disable linebreak-style */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(private _Router:Router) { }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ngOnInit(): void {
    }

    goHome() {
        this._Router.navigate(['/home']);
    }

}
