/* eslint-disable linebreak-style */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    constructor(private _Router:Router) { }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ngOnInit(): void {
    }
    goHome() {
        this._Router.navigate(['/home']);
    
    }

}
